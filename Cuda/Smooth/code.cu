#include<stdio.h>
#include<cuda.h>
#include<time.h>

#define Block 512

void c_smooth (float *a, float *b, int N){
    for (int i = 1; i < N; i++){
        b[i] = (a[i-1] + 2*a[i] + a[i+1]) * 0.25;
    }
    b[0] = (2*a[0] + a[1]) * 0.25;
    b[N-1] = (a[N-2] + 2*a[N-1]) * 0.25;
}

__global__ void g_smooth (float *a,float *b,int N){
    int i = blockIdx.x*blockDim.x + threadIdx.x;
    if (i == 0) b[i] = (2*a[0] + a[1]) * 0.25;
    else if (i == N-1) b[i] = (a[N-2] + 2*a[N-1]) * 0.25;
    else b[i] = (a[i-1] + 2*a[i] + a[i+1]) * 0.25;
}

__global__ void s_smooth (float *a, float *b,int N){
    int base = blockIdx.x * blockDim.x;
    int t_idx = threadIdx.x;

    __shared__ float s[Block+2];
    
    if (base+t_idx < N) s[t_idx+1] = a[base + t_idx];

    if (t_idx == 0){
        if (base == 0) s[0] = 0;
        else s[0] = a[base-1];
    }
    if (t_idx == 32){
        if (base + Block >= N) s[N-base+1] = 0;
        else s[Block+1] = a[base+Block];
    }

    __syncthreads();

    if (base+t_idx < N) b[base+t_idx] = (s[t_idx] + 2*s[t_idx+1] + s[t_idx+2]) * 0.25;
}

int main (void){
    int N = 10*1000*1000;
    int loop = 130;
    
    float* h_arr = new float[N];
    float* g_arr = new float[N];
    float* s_arr = new float[N];
    float* c_arr = new float[N];
    float* d_arr1;
    float* d_arr2;
    size_t size = N * sizeof(float);

    for (int i = 0; i < N; i++){
        h_arr[i] = (float)rand()/RAND_MAX;
    }
    cudaMalloc((void**) &d_arr1, size);
    cudaMalloc((void**) &d_arr2, size);
    cudaMemcpy(d_arr1, h_arr, size, cudaMemcpyHostToDevice);
    cudaMemcpy(d_arr2, h_arr, size, cudaMemcpyHostToDevice);
    int threadsPerBlocks = 512;
    int blocksPerGrid = N/512 + 1;

    double c_time = (double)clock()/CLOCKS_PER_SEC;
    for (int i = 0; i < loop; i++){
        c_smooth(h_arr, c_arr, N);
    }
    c_time = (double)clock()/CLOCKS_PER_SEC;

    double g_time = (double)clock()/CLOCKS_PER_SEC;
    cudaThreadSynchronize();
    for (int i = 0; i < loop; i++){
        g_smooth <<< blocksPerGrid, threadsPerBlocks >>> (d_arr1,d_arr2,N);
    }
    cudaThreadSynchronize();
    g_time = ((double)clock()/CLOCKS_PER_SEC - g_time);
    cudaMemcpy(g_arr, d_arr2, size, cudaMemcpyDeviceToHost);

    double s_time = (double)clock()/CLOCKS_PER_SEC;
    cudaThreadSynchronize();
    for (int i = 0; i < loop; i++){
        s_smooth <<< blocksPerGrid, threadsPerBlocks >>> (d_arr1, d_arr2, N);
    }
    cudaThreadSynchronize();
    s_time = ((double)clock()/CLOCKS_PER_SEC - s_time);
    cudaMemcpy(s_arr, d_arr2, size, cudaMemcpyDeviceToHost);

    float sum_c, sum_s, sum_g;

    for (int i = 0; i < N; i++){
        double diff_sc = s_arr[i] - c_arr[i];
        double diff_gc = g_arr[i] - c_arr[i]; 
        sum_c += c_arr[i] * c_arr[i];
        sum_s += diff_sc * diff_sc;
        sum_g += diff_gc * diff_gc;         
    }
    int num = 2;
    printf("time: %g s\n",(double)clock()/CLOCKS_PER_SEC);
    printf("vector size: %d\n", N);
    printf("loop time: %d\n", loop);
    printf("\nglobal run time: %g ms\n", g_time*1000);
    printf("shared run time: %g ms\n", s_time*1000);
    printf("cpu run time: %g ms\n", c_time*1000);
    printf("c_arr [%d]: %g\n",num ,c_arr[num]);
    printf("g_arr [%d]: %g\n",num ,g_arr[num]);
    printf("s_arr [%d]: %g\n",num ,s_arr[num]);
    printf("Diff(g/c): %g\n",sqrt(sum_g/sum_c));
    printf("Diff(s/c): %g\n",sqrt(sum_s/sum_c));

    cudaFree(d_arr1);
    cudaFree(d_arr2);
    delete [] h_arr;
    delete [] g_arr;
    delete [] s_arr;
    delete [] c_arr;

    return 0;
}
