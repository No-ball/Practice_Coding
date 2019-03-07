#include<stdio.h>
#include<stdlib.h>

void swap (int &a, int &b){
    int t = a;
    a = b;
    b = t;
}

void sort(int *data, int N){
    for (int i = 0; i < N; i = i + 2){
        if (i + 1 >= N) break;
        if (data[i] > data[i+1]) swap(data[i], data[i+1]);
    }
    for (int i = 1; i < N; i = i + 2){
        if (i + 1 >= N) break;
        if (data[i] > data[i+1]) swap(data[i], data[i+1]);
    }
}

int main (void){
    int N;
    scanf("%d", &N);
    size_t size = sizeof(int) * N;
    int* data = (int*)malloc(size);
    for (int i = 0; i < N; i++) scanf("%d", &data[i]);

    for (int i = 0; i <= N/2; i++) sort(data,N);

    for (int i = 0; i < N; i++) printf("%d ", data[i]);
    printf("\n");


    delete data;
    return 0;
}