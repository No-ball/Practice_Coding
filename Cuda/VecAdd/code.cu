#include<stdio.h>
#include<cuda.h>

struct Position{
    uint3 thread;
    uint3 block;
};

__global__ void VecAdd(float *A,float *B, float *C, Position *p,int n){
    int i = blockDim.x * blockIdx.x + threadIdx.x;
    p[i].block = blockIdx;
    p[i].thread = threadIdx;
    if (i<n) C[i] = A[i] + B[i];
}

int main (void){
    int N = 3 * 256 + 1;
    size_t size = N * sizeof(int);
    
    Position *p = (Position*)malloc(N * sizeof(Position));
    memset(p, 0, N * sizeof(Position));

    Position *d_P;
    cudaMalloc ((void**) &d_P, N * sizeof(Position));
    cudaMemcpy(d_P, p, N * sizeof(Position), cudaMemcpyHostToDevice);


    float *h_A = (float*)malloc(size);
    float *h_B = (float*)malloc(size);
    float h_C[1000];

    for (int i=0; i<N; i++){
        h_A[i] = i;
        h_B[i] = (float)i/1000;
    }

    float* d_A;
    float* d_B;
    float* d_C;

    cudaMalloc(&d_A, size);
    cudaMalloc(&d_B, size);
    cudaMalloc(&d_C, size);

    cudaMemcpy(d_A, h_A, size, cudaMemcpyHostToDevice);
    cudaMemcpy(d_B, h_B, size, cudaMemcpyHostToDevice);

    int threadsPerBlock = 256;
    int blocksPerGrid = (N + threadsPerBlock - 1) / threadsPerBlock;

    VecAdd <<< blocksPerGrid, threadsPerBlock >>> (d_A, d_B, d_C, d_P, N);

    cudaMemcpy(h_C, d_C, size, cudaMemcpyDeviceToHost);
    cudaMemcpy(p, d_P, N * sizeof(Position), cudaMemcpyDeviceToHost);

    cudaFree(d_A);
    cudaFree(d_B);
    cudaFree(d_C);

    for (int i = 0; i<N; i++){
        printf("block:(%d, %d, %d), thread:(%d, %d, %d) -- %f + %f = %f\n", p[i].block.x, p[i].block.y, p[i].block.z, p[i].thread.x, p[i].thread.y, p[i].thread.z, h_A[i] ,h_B[i] ,h_C[i]);
    }
    delete h_A;
    delete h_B;
    delete p;

    return 0;
}