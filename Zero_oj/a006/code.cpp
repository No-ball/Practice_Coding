#include<iostream>
#include<math.h>

int main (void){

    int a,b,c;

    while(scanf("%d %d %d",&a,&b,&c) != EOF){
        int D = b*b-(4*a*c);
        if(!D) printf("Two same roots x=%d\n",int(-b+sqrt(D))/(2*a));
        else if (D < 0) printf("No real root\n");
        else printf("Two different roots x1=%d , x2=%d\n",int(-b+sqrt(D))/(2*a),int(-b-sqrt(D))/(2*a));
    }

    return 0;
}