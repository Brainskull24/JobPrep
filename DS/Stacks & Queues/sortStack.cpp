#include <iostream>
using namespace std;

class Stack
{
private:
    int *arr;
    int top;
    int size;

public:
    Stack(int size)
    {
        this->size = size;
        arr = new int[size];
        top = -1;
    }

    void push(int element)
    {
        if (top == size - 1)
        {
            cout << "Stack Overflow" << endl;
            return;
        }
        top++;
        arr[top] = element;
    }

    int peek()
    {
        if (top == -1)
        {
            cout << "Stack is empty" << endl;
            return -1;
        }
        return arr[top];
    };

    void pop()
    {
        if (top == -1)
        {
            cout << "Stack Underflow" << endl;
            return;
        }
        top--;
    }

    bool isEmpty()
    {
        return top == -1;
    }

    bool isFull()
    {
        return top == size - 1;
    }

    void printStack()
    {
        if (top == -1)
        {
            cout << "Stack is empty" << endl;
            return;
        }
        for (int i = 0; i <= top; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

void insertSorted(stack<int>&s, int top){
    if(s.empty() || s.top() < top){
        s.push(top);
        return;
    }
    int element = s.top();
    s.pop();
    insertSorted(s, top);
    s.push(element);
}

void sortStack(stack<int>&s)
{
    if (s.empty())
        return;

    int top = s.top();
    s.pop();
    sortStack(s);
    insertSorted(s, top);
}

int main()
{

    Stack s(100);
    s.push(100);
    s.push(1);
    s.pop();
    s.peek();
    s.push(3);
    s.push(2);
    s.printStack();

    stack<int> st;
    st.push(5);
    st.push(1);
    st.push(4);
    st.push(2);
    st.push(3);
    sortStack(st);

    cout << "Sorted Stack: ";
    while (!st.empty())
    {
        cout << st.top() << " ";
        st.pop();
    }
}