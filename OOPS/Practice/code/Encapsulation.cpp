// Encapsulation
// - Program showing private data members with public getters and setters.
// - Example: BankAccount class with private balance and public methods deposit() and withdraw().

#include <iostream>
using namespace std;

class BankAccount {
    private:
    string accountNumber;
    string accountHolderName;
    double balance;

    public:
    BankAccount(string accNum, string accHolder, double initialBalance) 
        : accountNumber(accNum), accountHolderName(accHolder), balance(initialBalance) {}

    // Getter for balance
    double getBalance() {
        return balance;
    }

    // Method to deposit money
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: " << amount << ". New Balance: " << balance << endl;
        } else {
            cout << "Deposit amount must be positive!" << endl;
        }
    }

    // Method to withdraw money
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrew: " << amount << ". New Balance: " << balance << endl;
        } else {
            cout << "Invalid withdrawal amount!" << endl;
        }
    }

};

int main(){
    BankAccount account("123456789", "John Doe", 1000.0);
    account.deposit(500);
    account.withdraw(200);
    cout << "Final Balance: " << account.getBalance() << endl;
    return 0;
}