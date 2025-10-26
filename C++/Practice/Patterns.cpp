#include <iostream>
using namespace std;

// ========================
// Right-angled triangle
void rightTriangle(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++)
            cout << "* ";
        cout << endl;
    }
}

// Inverted triangle
void invertedTriangle(int n) {
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++)
            cout << "* ";
        cout << endl;
    }
}

// Pyramid
void pyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++)
            cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++)
            cout << "*";
        cout << endl;
    }
}

// Inverted pyramid
void inversePyramid(int n) {
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++)
            cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++)
            cout << "*";
        cout << endl;
    }
}

// Diamond
void diamond(int n) {
    pyramid(n);
    inversePyramid(n);
}

// Number pyramid
void numberPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++)
            cout << " ";
        for (int j = 1; j <= i; j++)
            cout << j << " ";
        cout << endl;
    }
}

// Floyd's triangle
void floydsTriangle(int n) {
    int num = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << num << " ";
            num++;
        }
        cout << endl;
    }
}

// Pascal's triangle
void pascalTriangle(int n) {
    for (int i = 0; i < n; i++) {
        int val = 1;
        for (int j = 0; j <= i; j++) {
            cout << val << " ";
            val = val * (i - j) / (j + 1);
        }
        cout << endl;
    }
}

// Hollow square
void hollowSquare(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n)
                cout << "*";
            else
                cout << " ";
        }
        cout << endl;
    }
}

// Hollow pyramid
void hollowPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++)
            cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) {
            if (j == 1 || j == 2 * i - 1 || i == n)
                cout << "*";
            else
                cout << " ";
        }
        cout << endl;
    }
}

// ========================
// Main function to test
int main() {
    int n = 5;

    cout << "Right Triangle:\n"; rightTriangle(n);
    cout << "\nInverted Triangle:\n"; invertedTriangle(n);
    cout << "\nPyramid:\n"; pyramid(n);
    cout << "\nInverse Pyramid:\n"; inversePyramid(n);
    cout << "\nDiamond:\n"; diamond(n);
    cout << "\nNumber Pyramid:\n"; numberPyramid(n);
    cout << "\nFloyd's Triangle:\n"; floydsTriangle(n);
    cout << "\nPascal's Triangle:\n"; pascalTriangle(n);
    cout << "\nHollow Square:\n"; hollowSquare(n);
    cout << "\nHollow Pyramid:\n"; hollowPyramid(n);

    return 0;
}
