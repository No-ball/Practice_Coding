#include<iostream>
#include<cstring>

void Switch(int &a, int &b){
    int t = a;
    a = b;
    b = t;
}

void print(int size, int *arr){

    for (int i = 0; i < size; i++){
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void Sort (int left, int right,int *arr){

    if (left > right) return;

    int flag = left;
    for (int i = left; i < right; i++){
        if (arr[i] < arr[right]){
            Switch (arr[flag], arr[i]);
            flag ++;
        }
    }
    Switch(arr[flag], arr[right]);

    Sort(left, flag - 1, arr);
    Sort(flag + 1, right, arr);
}

int main (void){

    int size;
    scanf("%d", &size);
    size_t a_size = sizeof(int) * size;
    int *array = (int*) malloc(a_size);
    memset (array, 0, a_size);
    for (int i = 0; i < size; i++){
        scanf("%d", &array[i]);
    }

    Sort (0, size - 1, array);

    print(size, array);

    return 0;
}