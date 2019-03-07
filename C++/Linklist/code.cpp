#include<stdio.h>
struct Node{
    int data;
    Node *next;
};
Node* head = new Node;
Node* now = head;

void n_add (Node* temp, int input){
    temp -> next = new Node;
    now = temp -> next;
    now -> data = input;
    now -> next = NULL;
}

void n_del (Node* temp, int N){
    for (int i = 0; i < N; i ++){
        temp = temp -> next;
    }
    Node* trash = temp -> next;
    temp -> next = trash -> next;
    if (trash == now) {
        now = temp;
    }
    delete trash;
    return;
}
void print (Node *temp){
    if (temp == NULL) return;
    printf("%d ", temp -> data);
    print(temp -> next);
}

int oper (void){
    char input;
    int data;
    scanf("%c", &input);
    if (input == 'A'){
        scanf("%d", &data);
        n_add (now, data);
    }else if (input == 'P'){
        print (head -> next);
        printf("\n");
    }else if (input == 'D'){
        scanf("%d", &data);
        n_del(head, data);
    }else if (input == 'E') return 0;
    return 1;
}

int main (void){
    while(oper());
    return 0;
}