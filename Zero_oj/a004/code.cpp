#include<iostream>

int main(void){
    int input;

    while(scanf("%d",&input) != EOF){
        bool is_leap = false;

        if ((!(input%4) && (input%100)) || !(input%400)) is_leap = true;

    if (is_leap) printf("閏年\n");
    else printf("平年\n");
    }

    return 0;
}