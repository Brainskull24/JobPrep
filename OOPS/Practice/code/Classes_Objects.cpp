#include <iostream>
using namespace std;

class Student
{
public:
    string name;
    int rollNo;
    int age;

    void setDetails(string n, int r, int a)
    {
        name = n;
        rollNo = r;
        age = a;
    }

    void printDetails()
    {
        cout << "Name: " << name << endl;
        cout << "Roll No: " << rollNo << endl;
        cout << "Age: " << age << endl;
    }
};

class Rectangle
{
public:
    int length;
    int breadth;

    void setDimensions(int l, int b)
    {
        length = l;
        breadth = b;
    }

    int calculateArea()
    {
        return length * breadth;
    }
};

class Employee{
public:
    string name;
    int id;
    float salary;

    Employee(string n, int i, float s) : name(n), id(i), salary(s) {}

    void printDetails()
    {
        cout << "Name: " << name << endl;
        cout << "ID: " << id << endl;
        cout << "Salary: " << salary << endl;
    }
};

int main()
{
    // Creating object of Student class with stack memory as its 
    // created without new keyword
    Student s;

    s.name = "John";
    s.rollNo = 101;
    s.age = 20;
    s.printDetails();

    // Creating object of Student class with heap memory
    Student *s1 = new Student();
    s1->setDetails("Alice", 102, 21);
    s1->printDetails();

    // Freeing heap memory allocated to s1
    delete s1;

    // In Case of stack memory, it is automatically freed when it goes out of scope

    // Creating object of Rectangle class using stack memory
    Rectangle r = Rectangle();
    r.length = 5;
    r.breadth = 10;
    cout << r.calculateArea();

    Employee e("Bob", 201, 50000);
    e.printDetails();
    return 0;
}