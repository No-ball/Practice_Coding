#include<iostream>

int main (void){
    
    int r,w;

    while(scanf("%d %d",&r,&w) != EOF){
        int array[100+5][100+5] = {0};

        for (int i=0; i<r; i++){
            for (int j=0; j<w; j++){
                scanf("%d",&array[i][j]);
            }
        }
        for (int i=0; i<w; i++){
            for (int j=0; j<r; j++){
                printf("%d ",array[j][i]);
            }
            printf("\n");
        }
    }

    return 0;
}