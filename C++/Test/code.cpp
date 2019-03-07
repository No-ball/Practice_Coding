#include<stdio.h>
#include<stdlib.h>

int main (void){
  void* ptr = malloc(0x68);
  void* ptr2 = malloc(0x68);

  free(ptr);
  free(ptr);

  return 0;
}