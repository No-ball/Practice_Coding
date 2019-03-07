#include<iostream>

int main(void){
    int t;
    scanf("%d",&t);
    for (int i=0; i<t; i++){
        int input[4+5];
        for (int j=0; j<4; j++){
            scanf("%d",&input[j]);
            printf("%d ",input[j]);
        }
        if (2*input[1] == input[0]+input[2]) printf("%d\n",input[3] + (input[1] - input[0]));
        else printf("%d\n",input[3]*(input[2]/input[1]));
    }

    return 0;
}