#include <iostream>
using namespace std;

int findGCD(int a, int b){
    if(b == 0) return a;
    return findGCD(b, a % b);
}

int findLCM(int a, int b){
    return (a * b) / findGCD(a, b);
}

int main(){
    int a, b;
    cin >> a >> b;

    int gcd = findGCD(a, b);
    cout<< "GCD of " << a << " and " << b << " is: " << gcd << endl;
    return 0;

    int lcm = findLCM(a, b);
    cout << "LCM of " << a << " and " << b << " is: " << lcm << endl;
}