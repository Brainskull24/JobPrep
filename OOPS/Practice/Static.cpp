#include <iostream>
using namespace std;

// Static Members
// - Demonstrate static variable shared by all objects.
// - Use static member function to show count of total objects created.

class Book
{
public:
    static int bookCount;

    Book()
    {
        bookCount++;
        cout << "Book created. Total books: " << bookCount << endl;
    }

    static void showCount() {
        cout << "Current total books: " << bookCount << endl;
    }
};

int Book::bookCount = 0;    

int main()
{
    Book b1;
    Book::showCount();
    Book b2;
    Book::showCount();
    Book b3;
    Book::showCount();
    cout << "Final Book Count: " << Book::bookCount << endl;
    return 0;
}