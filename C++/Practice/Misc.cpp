// Misc Logical

#include <iostream>
using namespace std;

// Print multiplication table of a number.

void multiplicationTable(int num)
{
    for (int i = 1; i <= 10; i++)
    {
        cout << num << " x " << i << " = " << num * i << endl;
    }
}

// Count number of even and odd numbers in array.

void countEvenOdd(int arr[], int size, int &evenCount, int &oddCount)
{
    evenCount = 0;
    oddCount = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 2 == 0)
            evenCount++;
        else
            oddCount++;
    }
}

// Sum of even and odd numbers separately.

void sumEvenOdd(int arr[], int size, int &evenSum, int &oddSum)
{
    evenSum = 0;
    oddSum = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] % 2 == 0)
            evenSum += arr[i];
        else
            oddSum += arr[i];
    }
}

// Print all factors of a number.

void printFactors(int num)
{
    cout << "Factors of " << num << " are: ";
    for (int i = 1; i <= num; i++)
    {
        if (num % i == 0)
            cout << i << " ";
    }
    cout << endl;
}

// Find greatest of three numbers using ternary operator.

int greatestOfThree(int a, int b, int c)
{
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
}

// Reverse digits and check palindrome number.


// Quick Summary Table
// Algorithm	Time Complexity	Space	Stable	Usage
// Bubble Sort	O(n²)	O(1)	Yes	Small/almost sorted
// Selection Sort	O(n²)	O(1)	No	Few swaps needed
// Insertion Sort	O(n²)	O(1)	Yes	Small/almost sorted
// Merge Sort	O(n log n)	O(n)	Yes	Large datasets, linked lists
// Quick Sort	O(n log n) avg	O(log n)	No	Large arrays, fast in practice
// Heap Sort	O(n log n)	O(1)	No	Memory-sensitive, large arrays
// Counting Sort	O(n + k)	O(k)	Yes	Small integer range
// Radix Sort	O(d*(n+k))	O(n+k)	Yes	Large datasets of integers/strings
// Bucket Sort	O(n + k) avg	O(n)	Yes	Uniform distribution