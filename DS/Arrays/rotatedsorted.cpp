#include <iostream>
using namespace std;

int findElementInRotatedArray(int arr[], int n, int target){
    int start = 0, end = n-1;
    while(start <= end){
        int mid = (start + end)/2;
        if(arr[mid] == target){
            return mid; 
        } else if(arr[mid] > target){
            if(arr[start] <= target || arr[mid] < arr[start]){
                end = mid - 1; // target is in the left part
            } else {
                start = mid + 1; // target is in the right part
            }
        } else {
            if(arr[end] >= target || arr[mid] > arr[end]){
                start = mid + 1; // target is in the right part
            } else {
                end = mid - 1; // target is in the left part
            }
        }
    }
    return -1;
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

    int index = -1;
    index = findElementInRotatedArray(arr, n, target);
    cout<<index<<endl;
    return 0;
}