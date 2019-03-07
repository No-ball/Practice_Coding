#include<iostream>
#include<cstring>

#define SIZE 500 + 500 + 5

int max (int a, int b){
    return a > b ? a : b; 
}

void set (char *a, int N){
    for (int i = 0; i < N; i++){
        a[i] = 0;
    }
}

void ans (char *answer, int N){
    for (int i = N; i >= 0; i--){
        printf("%c", answer[i]);
    }
    if (N < 0) printf("0");
    printf("\n");
}

void reverse (char *a, int N){
    char temp[SIZE];
    strcpy(temp, a);
    for (int i = 0;i < N; i++){
        a[i] = temp[N-1 - i];
    }
}

int carry (char *a,int N){
    int i = 0;
    while (a[i+1] != 0 || i < N){
        a[i] %= 48;
        while(a[i] >= 10 || a[i] < 0){
            while (a[i] >= 10) {
                a[i+1] += a[i]/10;
                a[i] %= 10;
            }
            while (a[i] < 0){
                a[i+1] -= a[i]/10 + 1; 
                a[i] = 10 + a[i]%10;
            }
        }
        i++;
    }
    while(a[i] == 0) i--;
    for (int j = 0; j <= i; j++){
        a[j] += 48;
    }
    return i;
}

int add (char *a, char *b, int N){
    for (int i = 0; i < N; i++){
        a[i] = a[i]%48 + b[i]%48;
    }
    return carry (a, N);
}

bool is_positive (char *a, char *b, int N){
    if (strlen(a) < strlen(b)) return false;
    else if (a[N-1]%48 < b[N-1]%48) return false;
    else return true;
}

void Switch (char *a, char *b, int N){
    char t[500+5];
    strcpy(t, a);
    set(a, N);
    strcpy(a, b);
    set(b, N);
    strcpy(b, t);
}

int minus (char *a, char *b, int N){
    if(!is_positive(a, b, N)){
        Switch (a, b, N);
        printf("-");
    }
    for (int i = 0; i < N; i++){
        a[i] = a[i]%48 - b[i]%48;
    }
    return carry (a, N);
}

int time (char *a, char *b, int aN, int bN){
    for (int i = 0; i < aN; i++){
        int flag = 1;
        for (int j = 0; j < bN; j++){
            a[i] += a[i] * flag * b[j];
            flag *= 10;
        }
    }
    return carry (a, aN + bN);
}

int devide (char *a, char *b, int len){
    if (!is_positive(a, b, len)){
        return len - 1;
    }
    len = minus (a, b, len);
    while (len >= 0){
        if (!is_positive(a, b, len + 1)) return len;
        len = minus (a, b, len + 1);
    }
}

int main (void){
    char oper;
    char f_input[SIZE] = {0}, s_input[SIZE] = {0};

    while(scanf("%s %c %s", &f_input, &oper, &s_input) != EOF){

        int f_len = strlen(f_input), s_len = strlen(s_input);
        int len = max (f_len, s_len);
        reverse(f_input, f_len);
        reverse(s_input, s_len);

        if (oper == '+') len = add (f_input, s_input, len);
        if (oper == '-') len = minus (f_input, s_input, len);
        if (oper == '*') len = time (f_input, s_input, f_len, s_len);
        if (oper == '/') len = devide (f_input, s_input, len);
        ans (f_input, len);
        set (f_input, f_len);
        set (s_input, s_len);
    }
}