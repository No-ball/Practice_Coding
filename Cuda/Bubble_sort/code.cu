#include <cuda.h>
#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

//----------------------------------------------
// 排序 N 個 float 元素 (N=1~1025)
// 使用到的記憶體大小為 SIZE 個 bytes
// 只使用單一區塊
// 區塊大小為 N/2
//----------------------------------------------
#define N      1024
#define SIZE   (N*sizeof(float))

#define GRID   1
#define BLOCK  (N/2)

#define testLoop 1000  //測試效能時的 loop 數

//----------------------------------------------
// 交換函式 (host 和 kernel 都可以使用) 
// 因為加了 __host__ 和 __device__ 兩個標籤
//----------------------------------------------
inline __host__ __device__ void swap(float& a, float& b){
        float c=a;
        a=b;
        b=c;
}

//----------------------------------------------
// 泡泡的 kernel (由小到大排列 N 個元素 a->r)
//----------------------------------------------
__global__ void bubble(float *r, float *a){
        //*** blockDim=N/2 ***
        int j=threadIdx.x;      //j=0,1,2,...blockDim-1 
        int k=2*threadIdx.x;    //k=0,2,4,...2*(blockDim-1) 配對的基底索引

        //配置共享記憶體
        __shared__ float s[N+20];

        //載入資料到共享記憶體
        __syncthreads();   //同步化執行緒, 加速載入速度 (合併讀取 coalesced)
        s[j]=a[j];         //使用全部執行緒一起載入前半段 (0~N/2-1)
        s[j+N/2]=a[j+N/2]; //使用全部執行緒一起載入後半段 (N/2~N-1)
        if(j==0){
                //若 N 為奇數時, 還要多載入一個尾巴, 只使用第 0 個執行緒
                s[N-1]=a[N-1];
        }

        //開始泡泡排序
        for(int loop=0; loop<=N/2; loop++){
                //排列 0 based 配對資料 (0,1) (2,3) (4,5) .... 
                __syncthreads();  //同步化確保共享記憶體已寫入
                if(s[k]>s[k+1]){
                        swap(s[k],s[k+1]);
                }

                //排列 1 based 配對資料 (1,2) (3,4) (5,6) .... 
                __syncthreads();  //同步化確保共享記憶體已寫入
                if(s[k+1]>s[k+2]){
                        if(k<N-2) //若 N 為偶數時, 最後一個執行緒不作用
                        swap(s[k+1],s[k+2]);
                }
        }

        //轉出資料到全域記憶體
        __syncthreads();
        r[j]=s[j];
        r[j+N/2]=s[j+N/2];
        if(j==0){
                r[N-1]=s[N-1];
        }

}


//----------------------------------------------
// 泡泡的 host 函數 
//----------------------------------------------
void bubble_host(float *r, float *a){
        //載入資料
        for(int k=0; k<N; k++){
                r[k]=a[k];
        }

        for(int loop=0; loop<=N/2; loop++){
                //排列 0 based 配對資料
                for(int k=0; k<N-1; k+=2){
                        if(r[k]>r[k+1]){
                                swap(r[k],r[k+1]);
                        }
                }
                //排列 1 based 配對資料
                for(int k=1; k<N-1; k+=2){
                        if(r[k]>r[k+1]){
                                swap(r[k],r[k+1]);
                        }
                }
        }
}


//----------------------------------------------
// 主程式
//----------------------------------------------
int main(){
        //配置 host 記憶體
        float *a=(float*)malloc(SIZE);
        float *b=(float*)malloc(SIZE);
        float *c=(float*)malloc(SIZE);


        //初始化
        for(int k=0; k<N; k++){
                a[k]=k;
                c[k]=0;
        }

        //對陣列 a 洗牌
        srand(time(0));
        for(int k=0; k<2*N; k++){
                int i=rand()%N;
                int j=rand()%N;
                swap(a[i],a[j]);
        }

        //配置 device 記憶體
        float  *ga, *gc;
        cudaMalloc((void**)&ga, SIZE);
        cudaMalloc((void**)&gc, SIZE);

        //載入 (順便載入 c 來清空裝置記憶體內容)
        cudaMemcpy(ga, a, SIZE, cudaMemcpyHostToDevice);
        cudaMemcpy(gc, c, SIZE, cudaMemcpyHostToDevice);


        //測試 kernel 效能
        double t0=(double)clock()/CLOCKS_PER_SEC;
                for(int k=0; k<testLoop; k++){
                        //呼叫 kernel (此為單一 block 的版本)
                        bubble<<<1,BLOCK>>>(gc,ga);

                        //同步化執行緒, 避免還沒做完, 量到不正確的時間
                        cudaThreadSynchronize();
                }
        t0=((double)clock()/CLOCKS_PER_SEC-t0)/testLoop;

        //測試 host 效能
        double t1=(double)clock()/CLOCKS_PER_SEC;
                for(int k=0; k<testLoop; k++){
                        bubble_host(b,a);
                }
        t1=((double)clock()/CLOCKS_PER_SEC-t1)/testLoop;

        //顯示計算時間, 並比較
        printf("time[gpu]: %g ms\n",t0*1000);
        printf("time[host]: %g ms\n",t1*1000);
        printf("ratio: %g x\n",t1/t0);

        //讀出 device 資料
        cudaMemcpy(c, gc, SIZE, cudaMemcpyDeviceToHost);


        //測試 device 結果的正確性
        printf("------------------------\n");
        bool flag=true;
        for(int k=0; k<N; k++){
                if(c[k]!=k){
                        flag=false;
                        break;
                }
        }
        printf("test[gpu]: %s\n",flag?"pass":"fail");

        //測試 host 結果的正確性
        flag=true;
        for(int k=0; k<N; k++){
                if(b[k]!=k){
                        flag=false;
                        break;
                }
        }
        printf("test[host]: %s\n",flag?"pass":"fail");

        //釋放記憶體
        cudaFree(ga);
        cudaFree(gc);
        free(a);
        free(b);
        free(c);


        return 0;
}
