#include <stdio.h>
#include <cuda.h>

struct Index{
    uint3 block, thread;
};

__global__ void prob_idx_3d (Index* id){
    int b_idx = (blockIdx.z * gridDim.y + blockIdx.y) * gridDim.x + blockIdx.x;
    int t_idx = (threadIdx.z * blockDim.y + threadIdx.y) * blockDim.x + threadIdx.x;
    int b_dim = blockDim.x * blockDim.y * blockDim.z;
    int position = b_idx * b_dim + t_idx;

    id[position].block = blockIdx;
    id[position].thread = threadIdx;
}

int main (void){
    int g_x = 2, g_y = 2, g_z = 2;
    int b_x = 2, b_y = 2, b_z = 2;
    dim3 grid = dim3(g_x, g_y, g_z);
    dim3 block = dim3(b_x, b_y, b_z);
    printf("gridDim = dim3(%d, %d, %d)\n",grid.x, grid.y, grid.z);
    printf("blockDim = dim3(%d, %d, %d)\n",block.x, block.y, block.z);

    int N = grid.x*grid.y*grid.z*block.x*block.y*block.z;
    printf("Total number of threads = %d\n",N);

    size_t size = N*sizeof(Index);

    Index *h = (Index*)malloc(size);
    memset(h, 0, size);

    Index *d;
    cudaMalloc((void**) &d, size);
    cudaMemcpy(d, h, size, cudaMemcpyHostToDevice);

    prob_idx_3d <<< grid, block >>> (d);

    cudaError_t r = cudaGetLastError();
    printf("prob_idx_3d: %s\n",cudaGetErrorString(r));
    if (r != 0) goto end;

    cudaMemcpy(h, d, size, cudaMemcpyDeviceToHost);

    for (int i = 0; i < N; i++){
        printf("h[%d] = block:(%d, %d, %d), thread:(%d, %d, %d)\n",
            i, h[i].block.x, h[i].block.y, h[i].block.z, h[i].thread.x, h[i].thread.y, h[i].thread.z);

    }

    end:;

    cudaFree(d);
    delete h;

    return 0;

}