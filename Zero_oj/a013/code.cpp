#include<iostream>
#include<cstring>

int decode (char num[20+5]){
    int number = 0;
    int flag = 0; 
    for (int i = (strlen(num) - 1); i >= 0; i--){
        if (num[i] == 'M'){
            number += 1000; 
            flag = 7;
        }else if (num[i] == 'D'){
            if (flag <= 6) number += 500;
            else number -= 500;
            flag = 6;
        }else if (num[i] == 'C'){
            if (flag <= 5) number += 100;
            else number -= 100;
            flag = 5;
        }else if (num[i] == 'L'){
            if (flag <= 4) number += 50;
            else number -= 50;
            flag = 4;
        }else if (num[i] == 'X'){
            if (flag <= 3) number += 10;
            else number -= 10;
            flag = 3;
        }else if (num[i] == 'V'){
            if (flag <= 2) number += 5;
            else number -= 5;
            flag = 2;
        }else if (num[i] == 'I'){
            if (flag <= 1) number += 1;
            else number -= 1;
            flag = 1;
        }
    }
    return number;
}
void encode (int num){
    if(num/1000 > 0){
        for (int i=0; i<num/1000; i++) printf("M");
        num %= 1000; 
    }
    if (num/500 > 0){
        if (num%500 >= 400){
            printf("CM");
            num -= 900;
        }
        for (int i=0; i<num/500; i++) printf("D");
        num %= 500;
    }
    if (num/100 > 0){
        if (num/100 == 4) printf ("CD");
        else {
            for (int i=0; i<num/100; i++) printf("C");
        }
        num %= 100;
    }
    if (num/50 > 0){
        if (num%50 >= 40){
            printf("XC");
            num -= 90;
        }
        for (int i=0; i<num/50; i++) printf("L");
        num %= 50;
    }
    if (num/10 > 0){
        if (num/10 == 4) printf ("XL");
        else {
            for (int i=0; i<num/10; i++) printf("X");
        }
        num %= 10;
    }
    if (num/5 > 0){
        if (num%5 >= 4){
            printf("IX");
            num -= 9;
        }
        for (int i=0; i<num/5; i++) printf("V");
        num %= 5;
    }
    if (num/1 > 0){
        if (num/1 == 4) printf ("IV");
        else {
            for (int i=0; i<num/1; i++) printf("I");
        }
    }
}

int main (void){
    char input1[20+5],input2[20+5];

    while(1){
        scanf("%s %s",&input1,&input2);
        if (!strcmp(input1,"#")) break;
        int ans = decode(input1)-decode(input2);
        if (ans < 0) ans *= -1;
        if (ans) encode(ans);
        else printf("ZERO");
        printf("\n");
    }

    return 0;
}