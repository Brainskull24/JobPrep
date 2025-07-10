#include <iostream>
using namespace std;

class Queue {
private:
    int* arr;
    int front, rear;
    int size;

public:
    Queue(int size) {
        this->size = size;
        arr = new int[size];
        front = 0;
        rear = -1;
    }

    void enqueue(int element) {
        if (rear == size - 1) {
            cout << "Queue Overflow" << endl;
            return;
        }
        arr[++rear] = element;
    }

    void dequeue() {
        if (isEmpty()) {
            cout << "Queue Underflow" << endl;
            return;
        }
        cout << "Dequeued: " << arr[front] << endl;
        front++;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return -1;
        }
        return arr[front];
    }

    bool isEmpty() {
        return front > rear;
    }

    bool isFull() {
        return rear == size - 1;
    }

    void printQueue() {
        if (isEmpty()) {
            cout << "Queue is empty" << endl;
            return;
        }
        for (int i = front; i <= rear; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }

    ~Queue() {
        delete[] arr;
    }
};

int main() {
    Queue q(5); // size 5

    q.enqueue(10);
    q.enqueue(20);
    q.dequeue();     // removes 10
    cout << "Peek: " << q.peek() << endl;
    q.enqueue(30);
    q.enqueue(40);
    q.enqueue(50);
    q.printQueue(); // prints: 20 30 40 50
}
