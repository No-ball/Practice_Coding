#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include<math.h>
#include<cuda.h>

void transpose_host (float *b, float *a, int m, int n){
    for (int y = 0; y < m; y++){
        for (int x = 0; x < n; x ++){
            b[x*m + y] = a[y*n + x];
        }
    }
}

__global__ void transpose_naive_cr(float *b, float *a, int m, int n){
    int x = blockIdx.x*blockDim.x + threadIdx.y;
    int y = blockIdx.y*blockDim.y + threadIdx.x;
    if (y < m && x < n){
        b[x*m + y] = a[y*n + x];
    }
}

__global__ void transpose_shared(float *b, float *a, int m, int n){
    __shared__ float s[256];

    int x = blockIdx.x*blockDim.x + threadIdx.x;
    int y = blockIdx.y*blockDim.y + threadIdx.y;
    if (y < m && x < n){
        int t = threadIdx.y*blockDim.x + threadIdx.x;
        int i = y*n + x;
        s[t] = a[i]; 
    }
    __syncthreads();

    x = blockIdx.x*blockDim.x + threadIdx.y;
    y = blockIdx.y*blockDim.y + threadIdx.x;

    if (y < m && x < n){
        int t = threadIdx.x*blockDim.y + threadIdx.y;
        int o = x*m + y;
        b[o] = s[t];
    }
}

double rd(float *a, float *b, int size){
    double s = 0, d = 0;
    for (int k = 0; k < size; k++){
        double w = a[k] - b[k];
        s += a[k]*a[k];
        d += w*w;
    }
    return sqrt(d/s);
}

timer_t timer[10];
void set_timer(int k = 0){
    timer[k] = clock();
}
double get_timer[10]{
    return (double)(clock() - timer[k])/CLOCKS_PER_SEC;
}
void test(int m, int n, int loop = 100; int loop_host = 10){
    size_t size = m * n;
    printf("matrix size: %d x %d\n", m, n);

    float *a = new float[size];
    float *b = new float[size];
    float *c = new float[size];

    for (int i = 0; i < size; i ++){
        a[i] = (float)rand()*2/RAND_MAX-1;
        b[i] = 0;
    }

    float *ga, *gb;
    cudaMalloc((void**) &ga, size * sizeof(float));
    cudaMalloc((void**) &gb, size * sizeof(float));
    cudaMemcpy(ga, a, size*sizeof(float), cudaMemcpyDeviceToHost);
    cudaMemcpy(gb, b, size*sizeof(float), cudaMemcpyDeviceToHost);

    dim3 grid(n/16 + 1, m/16 + 1, 1);
    dim3 block(16,16,1);

    set_timer();
    for (int i = 0; i < loop_host; i++){
        transpose_host(b,a,m,n);
    }
    double t0 = get_timer()/loop_host;
    printf("host\ttime: %g ms\n", t0*1000);

    cudaMemset(gb, 0, size*sizeof(float));
    transpose_naive_cr <<< grid, block >>> (gb, ga, m, n);
    cudaMemcpy(c, gb, size * sizeof(float), cudaMemcpyDeviceToHost);

    set_timer();
    cudaThreadSynchronize();
    for (int i = 0; i < loop; i ++){
        transpose_naive_cr <<< grid, block >>> (bg, ga, m, n);
    }
    cudaThreadSynchronize();
    double t1 = get_timer()/loop;
    printf("naive(r)\ttime: %g ms (%dx)\terror: %g\n", t1*1000,(int)(t0/t1),rd(b, c, size));

    
}