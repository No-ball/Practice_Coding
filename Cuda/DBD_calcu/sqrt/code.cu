#include<stdio.h>
#include<cuda.h>

__global__ void test (int input, double *num){
    int idx = threadIdx.x;
    num[idx] =input-num[idx]*num[idx];
}
void run (int input, double *ans, int digit, double timer){
    
    if (digit <= 0) return;

    double *r;
    double *num = new double[100];
    for (int i=0; i<100; i++){
        num[i] = *ans + timer*i;
    }

    cudaMalloc((void**) &r, 100*sizeof(double));
    cudaMemcpy(r, num, 100*sizeof(double), cudaMemcpyHostToDevice);

    test <<< 1,100 >>> (input,r);

    cudaMemcpy(num, r, 100*sizeof(double), cudaMemcpyDeviceToHost);
    cudaFree(r);

    for (int i=0; i<100; i++){
        if (num[i] < 0){
            *ans += timer*(i-1);
            break; 
        }else if (i == 99) {
            *ans += timer*99;
        }
    }

    delete num;
    run(input,ans,digit - 1,timer/100);
}
int find_timer(int input){
    int ans = 1, i = 100;
    while(input /= i) ans *= 100;
    //printf("%d",ans);
    return ans;
}
int main (void){
    //char trash[100+5];
    int digit,input;
    //scanf("%s %s",&trash,&trash);
    scanf("%d %d",&digit,&input);
    int timer = find_timer(input);
    double *ans = new double;
    run(input, ans, digit, timer);
    printf("%.10f\n",*ans);
    delete ans;
    return 0;
}