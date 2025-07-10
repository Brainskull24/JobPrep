#include <iostream>
using namespace std;

struct Node{
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

class Stack
{
private:
   Node* top;

public:
    Stack() : top(nullptr) {}

    void push(int x){
        Node* newNode = new Node(x);
        newNode->next = top;
        top = newNode;
    }
    void pop(){
        if (top == nullptr) {
            cout << "Stack Underflow" << endl;
            return;
        }
        Node* temp = top;
        top = top->next;
        delete temp;
    }
    int peek(){
        if (top == nullptr) {
            cout << "Stack is empty" << endl;
            return -1; // or throw an exception
        }
        return top->data;
    }

    bool isEmpty()
    {
        return top == nullptr;
    }

    void printStack()
    {
        if (top == nullptr)
        {
            cout << "Stack is empty" << endl;
            return;
        }
        Node* temp = top;
        while (temp != nullptr)
        {
            cout << temp->data << " ";
            temp = temp->next;
        }
    }
};

int main()
{

    Stack s;

    s.push(10);
    s.push(20);
    s.pop(); // removes 20
    s.peek();
    s.push(30);
    s.push(40);
    s.printStack(); // prints 10 30 40

}