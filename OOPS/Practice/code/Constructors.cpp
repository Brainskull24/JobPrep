#include <iostream>
using namespace std;

// Constructors & Destructors
// - Demonstrate default, parameterized, and copy constructors.
// - Program to show how destructor works when object goes out of scope.
// - Example: Book class that counts number of objects created using a static variable in constructors/destructors.

class Book {
public:
    string title;
    string author;
    static int bookCount;

    // Default Constructor
    Book() {
        title = "Unknown";
        author = "Unknown";
        bookCount++;
        cout << "Default Constructor called. Book count: " << bookCount << endl;
    }

    // Parameterized Constructor
    Book(string t, string a) : title(t), author(a) {
        bookCount++;
        cout << "Parameterized Constructor called. Book count: " << bookCount << endl;
    }

    // Copy Constructor
    Book(const Book &b) : title(b.title), author(b.author) {
        bookCount++;
        cout << "Copy Constructor called. Book count: " << bookCount << endl;
    }

    // Destructor
    ~Book() {
        bookCount--;
        cout << "Destructor called. Book count: " << bookCount << endl;
    }

    void printDetails() {
        cout << "Title: " << title << ", Author: " << author << endl;
    }
};

int Book::bookCount = 0;

int main()
{
    Book b1; // Default constructor
    b1.printDetails();

    Book b2("1984", "George Orwell"); // Parameterized constructor
    b2.printDetails();

    Book b3 = b2; // Copy constructor
    b3.printDetails();

    cout << "Current Book Count: " << Book::bookCount << endl;
    return 0;
}