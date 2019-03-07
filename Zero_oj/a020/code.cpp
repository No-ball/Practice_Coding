#include<iostream>

int main (void) {
    char input[10+5];
    while (scanf("%s", &input) != EOF){
        bool ans = true;
        int check = 0;
        int temp = input[0] - 55;

        if (temp > 17) {
            if (temp == 18) temp = 0;
            else temp --;
        }
        if (temp > 22) {
            if (temp == 23) temp = 1;
            else temp --;
        }
        if (temp > 29 && temp < 33){
            if (temp == 30) temp = 32;
            else temp --;
        }
        if (temp == 0) temp = 34;
        if (temp == 1) temp = 35;


        check += temp/10 + temp%10 * 9;
        for (int i = 1; i < 9; i ++){
            check += (input[i] - 48) * (9-i);
        }
        check += input[9] - 48;
        if (check%10) ans = false;
        
        if (ans) printf("real\n");
        else printf("fake\n");
    }
    return 0;
}