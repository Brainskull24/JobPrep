#include <iostream>
using namespace std;

// Polymorphism
// - Function overloading: same function name, different parameter list.
//     👉 Example: add(int, int) and add(double, double)
// - Operator overloading: overload + to add two complex numbers or distances.
// - Function overriding: base class display() overridden in derived class.
// - Virtual functions example: base pointer pointing to derived object.
// - Pure virtual function example (abstract class): Shape → Circle, Rectangle.

class Calculation
{
public:
    // Function Overloading
    void add(int a, int b)
    {
        cout << "Integer addition: " << a + b << endl;
    }

    void add(int a, int b, int c)
    {
        cout << "Three Integer addition: " << a + b + c << endl;
    }

    virtual void printDetails()
    {
        cout << "Base class Calculation" << endl;
    }
};

class Addition : public Calculation
{
public:
    // function overriding

    void printDetails()
    {
        cout << "Derived class Addition" << endl;
    }
};

class Shape
{
public:
    virtual void area() = 0; // Pure virtual function making Shape an abstract class
};

class Circle : public Shape
{
private:
    double radius;

public:
    Circle(double r) : radius(r) {}
    void area() override
    {
        cout << "Area of Circle: " << 3.14 * radius * radius << endl;
    }
};

class Complex
{
public:
    double real, imag;

    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    Complex operator+(const Complex &obj)
    {
        return Complex(real + obj.real, imag + obj.imag);
    }

    Complex operator-(const Complex &obj)
    {
        return Complex(real - obj.real, imag - obj.imag);
    }

    void print()
    {
        cout << "Complex Number: " << real << " + " << imag << "i" << endl;
    }
};

int main()
{
    Calculation calc;
    calc.add(5, 10); // Calls add(int, int)

    calc.add(5, 10, 15); // Calls add(int, int, int)

    Addition *calc1 = new Addition();
    calc1->printDetails();

    // Virtual functions example: base pointer pointing to derived object.
    Shape *shape = new Circle(5.0);

    // Pure virtual function example (abstract class): Shape → Circle,
    shape->area(); // Calls Circle's area() method

    Complex c1(3, 4), c2(5, 6);
    Complex c3 = c1 + c2; // Calls overloaded + operator
    c3.print();

    Complex c4 = c1 - c2; // Calls overloaded - operator
    c4.print();

    delete calc1;
    delete shape;
    return 0;
}