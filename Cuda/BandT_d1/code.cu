#include<stdio.h>
#include<cuda.h>

struct Index{
        int block, thread;
};

__global__ void prob_idx(Index id[]){
        int b_idx = blockIdx.x;       
        int t_idx = threadIdx.x;      
        int b_dim = blockDim.x;       
        int position = b_idx * b_dim + t_idx;            
        
        id[position].block=b_idx;
        id[position].thread=t_idx;
};

int main(){
        Index* d;
        Index  h[100];

        
        cudaMalloc((void**) &d, 100*sizeof(Index));

        int threadsPerBlock = 3;
        int blocksPerGrid = 4;
        int N = threadsPerBlock * blocksPerGrid;
        prob_idx<<< blocksPerGrid, threadsPerBlock>>>(d);

        cudaMemcpy(h, d, 100*sizeof(Index), cudaMemcpyDeviceToHost);

        for(int i=0; i<N; i++){
            printf("h[%d]={block:%d, thread:%d}\n", i,h[i].block,h[i].thread);
        }

        cudaFree(d);
        return 0;
}