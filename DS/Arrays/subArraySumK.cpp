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

void findPrefixSum(int arr[], int n, int prefixSum[])
{
    prefixSum[0] = arr[0];
    for (int i = 1; i < n; i++)
    {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
}

int naive(int arr[], int n, int k, int prefixSum[])
{
    int ans = 0;

    for(int i = 0; i < n; i++){
        for(int j = i; j < n; j++){
            int sum = prefixSum[j] - (i > 0 ? prefixSum[i - 1] : 0);
            if(sum == k){
                ans++;
            }
        }
    }
    return ans;
}

int optimal(int arr[], int n, int k){
    int ans = 0;
    int sum = 0;
    unordered_map<int, int> prefixSumMap;

    for(int i = 0; i < n; i++){
        sum += arr[i];

        if(prefixSumMap.find(sum - k) != prefixSumMap.end()){
            ans += prefixSumMap[sum - k];
        }

        prefixSumMap[sum]++;
    }

    return ans;
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

    int prefixSum[n];
    findPrefixSum(arr, n, prefixSum);

    int totalSA = naive(arr, n, k, prefixSum);
    cout << "Total subarrays with sum " << k << ": " << totalSA << endl;

    // TC - O(n^2) + O(n) for prefix sum
    // SC - O(n)

    int totalSAOptimal = optimal(arr, n, k);
    cout << "Total subarrays with sum " << k << " (Optimal): " << totalSAOptimal << endl;

    // TC - O(n)
    // SC - O(n)
}