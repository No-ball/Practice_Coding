#include<iostream>
#include<cstring>

char input [100+5];

int oper(int top,int bot){
    printf("\n%d,%d\n",input[top]-48,input[bot]-48);
    return 1;
}

int main (void){
    while(1){
        int i=0;
        while(input[i-1] != 10 && input[i-1] != 0) scanf("%c",&input[i++]);
        for (int j=0; j<i; j++) printf("%d,\"%d\" ",j,input[j]);
        printf("\ninput[%d] = %c",i-2,input[i-2]);
        printf("%d\n",oper(i-2,i-3));
        if (input[i-1] == 0) break;
        for (int j=0; j<i + 1; j++)input[j] = 0;
    }
    return 0;
}