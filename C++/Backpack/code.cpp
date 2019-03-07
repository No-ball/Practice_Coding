#include<iostream>
#include<cstring>

struct Obj{
    int weight;
    int value;
};

int maximum (int a, int b){
    return (a > b ? a:b);
}

int backpack (int N, int max, int *BP, Obj *object){
    if (max < 0) return -1e9;
    if (N < 0) return 0;

    return BP[max] = maximum(backpack(N - 1, max - object[N].weight, BP, object) + object[N].value, backpack(N - 1, max, BP, object));
}

int main (void){
    
    int size, max;
    int min = 1e9;
    scanf("%d %d", &size, &max);
    int *BP     = (int*) malloc(sizeof(int) * size);
    Obj *object = (Obj*) malloc(sizeof(Obj) * size);
    memset (BP, 0, sizeof(int) * size);
    memset (object, 0, sizeof(Obj) * size);

    for (int i = 0; i < size; i++){
        scanf ("%d %d", &object[i].weight, &object[i].value);
        if (min > object[i].weight) min = object[i].weight;
    }
    printf("%d\n", backpack(size, max, BP, object));

    free(BP);
    free(object);
    return 0;
}