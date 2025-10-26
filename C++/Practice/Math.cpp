#include <iostream>
using namespace std;

// Find power of a number using loops(xⁿ).

int powr(int base, int exp)
{
    int result = 1;
    for (int i = 1; i <= exp; i++)
    {
        result *= base;
    }
    return result;
}

// Check if a number is prime.

bool isPrime(int num)
{
    if (num <= 1)
        return false;

    // Check divisibility from 2 to sqrt(num)
    // why sqrt(num)? because if num = a * b, at least one of those factors must be <= sqrt(num)
    for (int i = 2; i * i <= num; i++)
    {
        if (num % i == 0)
            return false;
    }

    return true;
}

// Print all prime numbers in a range.

void printPrimes(int start, int end)
{
    for (int num = start; num <= end; num++)
    {
        if (isPrime(num))
        {
            cout << num << " ";
        }
    }
    cout << endl;
}

// Check if a number is Armstrong number.
// Armstrong number: sum of each digit powered to the size of original number equals the original number.
bool isArmstrong(int num)
{
    int original = num;
    int sum = 0;
    int digits = 0;

    while (original != 0)
    {
        digits++;
        original /= 10;
    }

    original = num; // Reset original to num for the next loop

    for (int i = 0; i < digits; i++)
    {
        int digit = num % 10;
        sum += powr(digit, digits);
        num /= 10;
    }

    return sum == original;
}

// Check if a number is Perfect number.
// Perfect number: sum of its proper divisors equals the number itself.
bool isPerfect(int num)
{
    int sum = 0;
    for (int i = 1; i <= num / 2; i++) // why /2 because no factor will be greater than num/2 except the number itself
    {
        if (num % i == 0)
            sum += i;
    }
    return sum == num;
}

// Find factorial of a number (iterative and recursive).

int factorialIterative(int num)
{
    int result = 1;
    for (int i = 2; i <= num; i++)
    {
        result *= i;
    }
    return result;
}

int recursiveFactorial(int num)
{
    if (num <= 1)
        return 1;
    return num * recursiveFactorial(num - 1);
}

// Find GCD / HCF of two numbers.

int HCF(int a, int b)
{
    while (b != 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Find LCM of two numbers.

int LCM(int num1, int num2)
{
    int maxNum = (num1 > num2) ? num1 : num2;
    while (true)
    {
        if (maxNum % num1 == 0 && maxNum % num2 == 0)
            return maxNum;
        maxNum++;
    }
}

int LCM2(int a, int b)
{
    return (a / HCF(a, b)) * b;
}

// Reverse a number.

void reverseNumber(int num)
{
    int reversed = 0;
    while (num != 0)
    {
        int digit = num % 10;
        reversed = reversed * 10 + digit;
        num /= 10;
    }
    cout << reversed << endl;
}

// Count digits of a number.

int countDigits(int num)
{
    if (num == 0)
        return 1;
    int count = 0;
    while (num != 0)
    {
        num /= 10;
        count++;
    }
    return count;
}

// Sum of digits of a number.

int sumOfDigits(int num)
{
    int sum = 0;
    while (num != 0)
    {
        sum += num % 10;
        num /= 10;
    }
    return sum;
}

// Check if number is palindrome.

bool isPalindrome(int num)
{
    int original = num;
    int reversed = 0;
    while (num != 0)
    {
        int digit = num % 10;
        reversed = reversed * 10 + digit;
        num /= 10;
    }

    return original == reversed;
}

// Check if number is even or odd.

bool isEven(int num)
{
    return num % 2 == 0;
}

// Swap two numbers without using a third variable.

void swap(int &a, int &b) // call by reference
{
    a = a + b;
    b = a - b;
    a = a - b;
}

// Generate Fibonacci series up to n terms.

void fibonacciSeries(int n)
{
    int a = 0, b = 1;
    for (int i = 0; i < n; i++)
    {
        cout << a << " ";
        int next = a + b;
        a = b;
        b = next;
    }
}

// Find nth Fibonacci number.

int nthFibonacci(int n)
{
    if (n <= 0)
        return 0;
    if (n == 1)
        return 1;
    int a = 0, b = 1, fib;
    for (int i = 2; i <= n; i++)
    {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
}

// Find sum of first n natural numbers.

int sumOfN(int num)
{
    return num * (num + 1) / 2;
}

// Find the largest and smallest among 3 numbers.

void largestAndSmallest(int a, int b, int c)
{
    int smallest = a;
    int largest = a;

    if (b < smallest)
        smallest = b;
    if (c < smallest)
        smallest = c;

    if (b > largest)
        largest = b;
    if (c > largest)
        largest = c;
    cout << "Smallest: " << smallest << ", Largest: " << largest << endl;
}

int main()
{
    largestAndSmallest(1, 2, 3);
}