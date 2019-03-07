#include<iostream>

int main (void){
    int m,d;
    
    while(scanf("%d %d",&m,&d) != EOF){
        int s = (m*2+d)%3;
        if (s == 1) printf("吉\n");
        else if (s == 0) printf("普通\n");
        else printf("大吉\n");
    }

    return 0;
}