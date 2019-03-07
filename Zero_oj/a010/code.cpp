#include<iostream>
#include<cmath>

int c_num [1000000+5] = {0};

int prime (int input){
    int i = 2;
    while(input%i) i++;
    c_num[i] ++;
    if (i >= input) return input;
    prime(input/i);
}
int main (void){
    int input;
    
    while(scanf("%d",&input) != EOF){
        int last_prime = prime(input);
        if (last_prime) c_num[last_prime];
        for (int i=0; i<last_prime - 1; i++){
            if (c_num[i] != 0){
                printf("%d",i);
                if (c_num[i] > 1) printf("^%d",c_num[i]);
                c_num[i] = 0;
                printf(" * ");
            }
        }
        printf("%d",last_prime);
        if (c_num[last_prime] > 1) printf("^%d",c_num[last_prime]);
        c_num[last_prime] = 0;
        printf("\n");
    }
}