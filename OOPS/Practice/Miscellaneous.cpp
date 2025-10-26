#include <iostream>
using namespace std;

// ========================
// 1️⃣ Constructor Chaining
// Base class
class Person {
protected:
    string name;
public:
    Person(string n) : name(n) {
        cout << "Person constructor called for " << name << endl;
    }
};

// Derived class
class Employee : public Person {
    int empId;
public:
    Employee(string n, int id) : Person(n), empId(id) { // Constructor chaining
        cout << "Employee constructor called for ID " << empId << endl;
    }

    void display() {
        cout << "Name: " << name << ", Employee ID: " << empId << endl;
    }
};

// ========================
// 2️⃣ Composition / Aggregation
class Engine {
public:
    int horsepower;
    Engine(int hp) : horsepower(hp) {}
};

class Car {
    string brand;
    Engine engine; // Car has an Engine (composition)
public:
    Car(string b, int hp) : brand(b), engine(hp) {}
    void showDetails() {
        cout << "Car: " << brand << ", Engine HP: " << engine.horsepower << endl;
    }
};

// ========================
// 3️⃣ Object Slicing
class Base {
public:
    int x;
    Base(int val = 0) : x(val) {}
    virtual void print() { cout << "Base x: " << x << endl; }
};

class Derived : public Base {
public:
    int y;
    Derived(int val1 = 0, int val2 = 0) : Base(val1), y(val2) {}
    void print() override { cout << "Derived x: " << x << ", y: " << y << endl; }
};

// ========================
// 4️⃣ Pointer to Object
class Student {
public:
    string name;
    int rollNo;
    void printDetails() {
        cout << "Student: " << name << ", Roll No: " << rollNo << endl;
    }
};

int main() {
    cout << "=== Constructor Chaining ===" << endl;
    Employee e("Alice", 101);
    e.display();

    cout << "\n=== Composition / Aggregation ===" << endl;
    Car c("Toyota", 150);
    c.showDetails();

    cout << "\n=== Object Slicing ===" << endl;
    Derived d(5, 10);
    Base b = d;  // Object slicing: Derived part (y) is sliced off
    b.print();   // Only Base part printed

    cout << "\n=== Pointer to Object ===" << endl;
    Student *s = new Student();
    s->name = "Bob";
    s->rollNo = 202;
    s->printDetails();
    delete s;

    return 0;
}
