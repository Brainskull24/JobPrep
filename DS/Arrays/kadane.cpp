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

int kadane(int arr[], int n){
    // This works for atleast one positive number in the array

    // int maxSum = INT_MIN;
    // int currentSum = 0;
    // for(int i = 0; i < n; i++){
    //     if(currentSum < 0){
    //         currentSum = 0;
    //     }

    //     currentSum += arr[i];
    //     maxSum = max(maxSum, currentSum);
    // }
    // return maxSum;


    // Safe version

    int maxSum = arr[0];
    int currentSum = arr[0];
    for(int i = 1; i < n; i++){
        currentSum = max(arr[i], currentSum + arr[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}

int main(){
    int n;
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int sum = kadane(arr, n);
    cout<<"Maximum Subarray Sum: " << sum << endl;

    // TC - O(n)
    // SC - O(1)
}