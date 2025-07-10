#include <iostream>
using namespace std;

int findUpperBound(int arr[], int n, int target){
    int start = 0, end = n - 1;
    int ans = -1;
    while(start <= end){
        int mid = start + (end - start) / 2;
        if(arr[mid] > target){
            ans = mid; 
            end = mid - 1; 
        } else {
            start = mid + 1;
        }
    }
    return ans;
}

int findLowerBound(int arr[], int n, int target){
    int start = 0, end = n - 1;
    int ans = -1;
    while(start <= end){
        int mid = start + (end - start) / 2;
        if(arr[mid] >= target){
            ans = mid; 
            end = mid - 1; 
        } else {
            start = mid + 1;
        }
    }
    return ans;
}

int main(){
    int n;
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int target;
    cin>>target;

    int firstIndex = findLowerBound(arr, n, target);
    int lastIndex = findUpperBound(arr, n, target) - 1;
    if(firstIndex <= lastIndex && firstIndex != -1 && lastIndex != -1){
        cout << "First occurrence at index: " << firstIndex << endl;
        cout << "Last occurrence at index: " << lastIndex << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}