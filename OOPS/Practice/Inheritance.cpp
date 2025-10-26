// Inheritance
// - Single inheritance: class Vehicle → class Car
// - Multilevel inheritance: Person → Employee → Manager
// - Multiple inheritance: class A, class B → class C
// - Program to demonstrate accessing base class members using derived class object.

#include <iostream>
using namespace std;

class Vehicle
{
private:
    string brand;
    string type;

public:
    Vehicle(string b, string t) : brand(b), type(t) {}

    void printDetails()
    {
        cout << "Brand: " << brand << ", Type: " << type << endl;
    }

    void onlyHere()
    {
        cout << "Only in Vehicle class" << endl;
    }
};

class Car : public Vehicle
{
private:
    int doors;

public:
    Car(string b, string t, int d) : Vehicle(b, t), doors(d) {}

    void printCarDetails()
    {
        printDetails();
        cout << "Doors: " << doors << endl;
    }
};

class SUV : public Car
{
private:
    bool fourWheelDrive;

public:
    SUV(string b, string t, int d, bool fwd) : Car(b, t, d), fourWheelDrive(fwd) {}

    void printSUVDetails()
    {
        printCarDetails();
        cout << "4WD: " << (fourWheelDrive ? "Yes" : "No") << endl;
    }
};

class A
{
public:
    void showA() { cout << "Class A" << endl; }
};

class B
{
public:
    void showB() { cout << "Class B" << endl; }
};

class C : public A, public B
{
public:
    void showC() { cout << "Class C inherits A and B" << endl; }
};

int main()
{
    Vehicle v("Honda", "SUV");
    v.printDetails();

    // Single Inheritance
    Car myCar("Toyota", "Sedan", 4);
    myCar.printCarDetails();

    // Multilevel Inheritance
    SUV mySUV("Ford", "SUV", 4, true);
    mySUV.printSUVDetails();

    // Accessing base class method from derived class object
    Car c2("BMW", "Coupe", 2);
    c2.onlyHere();

    // Multiple Inheritance
    C objC;
    objC.showA();
    objC.showB();
    objC.showC();

    return 0;
}