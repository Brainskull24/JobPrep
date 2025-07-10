#include <iostream>
using namespace std;

void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void leftRotate(int arr[], int n, int k)
{
    for(int i = 0; i < k; i++){
        int temp = arr[0];
        for(int j = 0; j < n - 1; j++){
            arr[j] = arr[j + 1];
        }
        arr[n-1] = temp;
    }
}

void leftRotateOptimal(int arr[], int n, int k)
{
    reverse(arr, arr + k);
    reverse(arr + k, arr + n);
    reverse(arr, arr + n);
}

void rightRotate(int arr[], int n, int k)
{
    for(int i = 0; i < k; i++){
        int temp = arr[n-1];
        for(int j = n-1; j > 0; j--){
            arr[j] = arr[j - 1];
        }
        arr[0] = temp;
    }
}

void rightRotateOptimal(int arr[], int n, int k)
{
    reverse(arr, arr + n - k);
    reverse(arr + n - k, arr + n);
    reverse(arr, arr + n);
}

int main()
{
    int n;
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int k;
    cin >> k;

    k = k % n;

    // Naive approach
    leftRotate(arr, n, k);
    printArray(arr, n);

    rightRotate(arr, n, k);
    printArray(arr, n);

    // TC - O(n*k)
    // SC - O(1)

    //Optimal Approach

    leftRotateOptimal(arr, n, k);
    printArray(arr, n);

    rightRotateOptimal(arr, n, k);
    printArray(arr, n);

    // TC - O(n)
    // SC - O(1)
}