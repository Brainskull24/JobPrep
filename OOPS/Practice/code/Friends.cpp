#include <iostream>
using namespace std;

class Complex {
private:
    int real;
    int imag;

public:
    Complex(int r = 0, int i = 0) {
        real = r;
        imag = i;
    }

    // Declare friend function
    friend Complex sumComplex(Complex c1, Complex c2);

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

// Friend function definition
Complex sumComplex(Complex c1, Complex c2) {
    Complex temp;
    temp.real = c1.real + c2.real;  // accessing private members
    temp.imag = c1.imag + c2.imag;
    return temp;
}

class Box {
private:
    double length;
    double width;
    double height;

public:
    Box(double l, double w, double h) : length(l), width(w), height(h) {}

    // Declare friend class
    friend class BoxOperations;
};

class BoxOperations {
public:
    // Friend class can access private members of Box
    static double calculateVolume(Box b) {
        return b.length * b.width * b.height;
    }

    static void displayDimensions(Box b) {
        cout << "Length: " << b.length
             << ", Width: " << b.width
             << ", Height: " << b.height << endl;
    }
};

int main() {
    Complex c1(3, 4);
    Complex c2(5, 6);
    Complex result = sumComplex(c1, c2);

    cout << "Sum of complex numbers: ";
    result.display();

    Box b1(2.5, 3.0, 4.0);

    cout << "Box dimensions: ";
    BoxOperations::displayDimensions(b1);

    double volume = BoxOperations::calculateVolume(b1);
    cout << "Volume of Box: " << volume << endl;

    return 0;
}
