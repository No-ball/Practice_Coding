#include<iostream>

bool is_use[9+5];
int arr[9+5][9+5] = {0};
bool right;

int check(int startx,int starty,int n,int m){
    for (int i=1; i<=9; i++) is_use[i] = false;

    for (int i = startx; i<startx+n; i++){
        for (int j = starty; j<starty+m; j++){
            //printf("arr[%d][%d] = %d\n",i,j,arr[i][j]);
            if (is_use[arr[i][j]]) return 1;
            is_use[arr[i][j]] = true;
        }
    }
    return 0;
}

int main (void){
    bool end = true;
    bool trash = false;
    while(end){
        right = true;
        arr[9+5][9+5] = {0};
        for (int i=0; i<9; i++){
            for (int j=0; j<9; j++){
                end = scanf("%d",&arr[i][j]) != EOF;
            }
        }
        if (!end) break;
        for (int i=0; i<9; i++){
            if (check(i,0,1,9)) right = false;
            else if (check(0,i,9,1)) right = false;    
        }
        if (right){
            for (int i=0 ; i<9; i += 3){
                for (int j=0; j<9; j+= 3){
                    if(check(i,j,3,3)){
                        right = false;
                        break;    
                    }
                }
            }
        }
        if (right) printf("yes\n");
        else printf("no\n");
    }
}