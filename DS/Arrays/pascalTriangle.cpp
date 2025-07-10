#include <iostream>
using namespace std;

int findElement(int row, int col){
    long long res = 1;

    for(int i = 0; i < col; i++){
        res = res * (row - i);
        res = res / (i + 1);
    }

    return res;
}

int main(){
    // Variation 1 - Finding element by rows and columns 
    int row, col;
    cin >> row >> col;

    cout<< "Element at (" << row << ", " << col << ") is: " << findElement(row, col) << endl;

    // TC - O(col)
    // SC - O(1)

    // Variation 2 - Finding a complete row
    cout << "Row " << row << ": ";
    for(int i = 0; i <= row; i++){
        cout << findElement(row, i) << " ";
    }
    cout << endl;

    // TC - O(row)
    // SC - O(1)

    // Variation 3 - Finding a complete column
    cout << "Column " << col << ": ";
    for(int i = col; i <= row; i++){
        cout << findElement(i, col) << " ";
    }
    cout << endl;

    // TC - O(row - col + 1)
    // SC - O(1)

    // Variation 4 - Finding a complete pascal Triangle

    // Brute Force

    cout << endl << "Pascal's Triangle up to row " << row << ":" << endl;
    for(int i = 0; i <= row; i++){
        for(int j = 0; j <= i; j++){
            cout << findElement(i, j) << " ";
        }
        cout << endl;
    }

    // TC - O(row*row*column)
    // SC - O(1)

    // Optimized

    cout << endl << "Optimized Pascal's Triangle up to row " << row << ":" << endl;
    for(int i = 0; i <= row; i++){
        long long res = 1;
        for(int j = 0; j <= i; j++){
            cout << res << " ";
            res = res * (i - j) / (j + 1);
        }
        cout << endl;
    }

    // TC - O(row*column)
    // SC - O(1)

    return 0;
}