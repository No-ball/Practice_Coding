#include<iostream>
#include<cstring>

int main(void){

    char input[100+5];
    
    while(scanf("%s",&input) != EOF){
        for (int i=0; i<strlen(input); i++) printf("%c",input[i]-7);
        printf("\n");
    }

    return 0;
}