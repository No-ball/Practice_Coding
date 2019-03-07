#include<iostream>

int main (void){
    
    char input[100+5];

    while(scanf("%s",&input) != EOF) printf("hello, %s\n",input);

    return 0;
}