// Array & String Logic

#include <iostream>
using namespace std;

// Find maximum/minimum in array.

void findMaxMin(int arr[], int size)
{
    int maxx = INT_MIN;
    int minn = INT_MAX;

    for (int i = 0; i < size; i++)
    {
        if (arr[i] > maxx)
            maxx = arr[i];
        if (arr[i] < minn)
            minn = arr[i];
    }
    cout << "Maximum: " << maxx << ", Minimum: " << minn << endl;
}

// Find sum or average of array elements.

void sumAndAverage(int arr[], int size)
{
    int sum = 0;
    for (int i = 0; i < size; i++)
    {
        sum += arr[i];
    }
    double average = (double)sum / size;
    cout << "Sum: " << sum << ", Average: " << average << endl;
}

// Reverse an array.

void reverseArray(int arr[], int size)
{
    int start = 0, end = size - 1;
    while (start < end)
    {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}

// Check if array is sorted.

bool isSorted(int arr[], int size)
{
    for (int i = 1; i < size; i++)
    {
        if (arr[i] < arr[i - 1])
            return false;
    }
    return true;
}

// Find second largest element.

int secondLargest(int arr[], int size)
{
    int first = INT_MIN, second = INT_MIN;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > first)
        {
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second && arr[i] != first)
        {
            second = arr[i];
        }
    }
    return second;
}

// Find frequency of elements in array.

void frequencyOfElements(int arr[], int size)
{
    int freq[100] = {0};
    for (int i = 0; i < size; i++)
    {
        freq[arr[i]]++;
    }
    for (int i = 0; i < 100; i++)
    {
        if (freq[i] > 0)
            cout << "Element " << i << " occurs " << freq[i] << " times." << endl;
    }
}

// Merge two arrays.

void mergeArrays(int arr1[], int size1, int arr2[], int size2, int merged[])
{
    for (int i = 0; i < size1; i++)
    {
        merged[i] = arr1[i];
    }
    for (int j = 0; j < size2; j++)
    {
        merged[size1 + j] = arr2[j];
    }
}

// Linear search and binary search implementations.

int linearSearch(int arr[], int size, int target)
{
    for (int i = 0; i < size; i++)
    {
        if (arr[i] == target)
            return i;
    }
    return -1;
}

int binarySearch(int arr[], int size, int target)
{
    int left = 0, right = size - 1;
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}

// Bubble sort, selection sort, insertion sort basics.

void bubbleSort(int arr[], int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = 0; j < size - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
                swap(arr[j], arr[j + 1]);
        }
    }
}

void selectionSort(int arr[], int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        int minIndex = i;
        for (int j = i + 1; j < size; j++)
        {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        swap(arr[i], arr[minIndex]);
    }
}

void insertionSort(int arr[], int size)
{
    for (int i = 1; i < size; i++)
    {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// String palindrome check.

bool isStringPalindrome(string str)
{
    int left = 0, right = str.length() - 1;
    while (left < right)
    {
        if (str[left] != str[right])
            return false;
        left++;
        right--;
    }
    return true;
}

// Count vowels /
// consonants in a string.

void countVowelsAndConsonants(string str, int &vowelCount, int &consonantCount)
{
    vowelCount = 0;
    consonantCount = 0;
    for (char ch : str)
    {
        if (isalpha(ch))
        {
            char lowerCh = tolower(ch);
            if (lowerCh == 'a' || lowerCh == 'e' || lowerCh == 'i' || lowerCh == 'o' || lowerCh == 'u')
                vowelCount++;
            else
                consonantCount++;
        }
    }
}

// Reverse a string without using library function.

string reverseString(string str)
{
    int left = 0, right = str.length() - 1;
    while (left < right)
    {
        swap(str[left], str[right]);
        left++;
        right--;
    }
    return str;
}

// Convert string to uppercase /
// lowercase.

string toUpperCase(string str)
{
    for (char &ch : str)
    {
        ch = toupper(ch);
    }
    return str;
}

// Find length of string(without using strlen().

int stringLength(string str)
{
    int length = 0;
    for (char ch : str)
    {
        length++;
    }
    return length;
}

// Find frequency of characters in a string.

void frequencyOfCharacters(string str)
{
    int freq[256] = {0}; // Assuming ASCII
    for (char ch : str)
    {
        freq[(int)ch]++;
    }
    for (int i = 0; i < 256; i++)
    {
        if (freq[i] > 0)
            cout << "Character '" << (char)i << "' occurs " << freq[i] << " times." << endl;
    }
}

// Check if two strings are anagrams.

bool areAnagrams(string str1, string str2)
{
    if (str1.length() != str2.length())
        return false;

    int freq[256] = {0}; // Assuming ASCII

    for (char ch : str1)
        freq[(int)ch]++;

    for (char ch : str2)
    {
        freq[(int)ch]--;
        if (freq[(int)ch] < 0)
            return false;
    }
    return true;
}

int main()
{
    return 0;
}