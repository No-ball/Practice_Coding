#include<stdio.h>
#include<stdlib.h>

#define size sizeof(int) * N

void m_sort(int *data, int *ans, int N, int c_N){
    //printf("%d", N);
    if (N/2 == 0) return;
    m_sort(ans, data, N/2, c_N);
    N++;
    for (int i = 0; i < c_N; i += N){
        for (int j = i; j < i+N; j++){
            //data[j]<data[j+i]?ans[i+j]=data[j]:ans[i+j]=data[j+i];
            printf("%d %d\n", i, j);
        }
    }
    //for (int i = 0; i < N; i++) printf("%d ", ans[i]);
}

int main (void){
    int N;
    scanf("%d", &N);
    int *ans = (int*)malloc(size);
    int *data = (int*)malloc(size);
    for (int i = 0; i < N; i++) scanf("%d", &data[i]);
    if (N%2 == 1) N--;
    m_sort(data, ans, N, N);
}