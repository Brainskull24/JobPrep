// Show the use of encapsulation by creating a BankAccount class with private fields and getters/setters.
package Practice;

class BankAccount {
    // Private fields (data hidden)
    private String accountHolderName;
    private double balance;

    // Getter for name
    public String getAccountHolderName() {
        return accountHolderName;
    }

    // Setter for name
    public void setAccountHolderName(String accountHolderName) {
        this.accountHolderName = accountHolderName;
    }

    // Getter for balance
    public double getBalance() {
        return balance;
    }

    // Setter for balance with validation
    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        } else {
            System.out.println("Balance cannot be negative!");
        }
    }

    // Additional method to deposit money (example of controlled access)
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount!");
        }
    }

    // Additional method to withdraw money (example of encapsulation logic)
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient funds or invalid amount!");
        }
    }
}

public class Practice5 {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();

        // Setting values using setters
        account.setAccountHolderName("Abc");
        account.setBalance(5000);

        // Accessing values using getters
        System.out.println("Account Holder: " + account.getAccountHolderName());
        System.out.println("Initial Balance: " + account.getBalance());

        // Using encapsulated methods
        account.deposit(2000);
        System.out.println("Balance after deposit: " + account.getBalance());

        account.withdraw(3000);
        System.out.println("Balance after withdrawal: " + account.getBalance());

        account.withdraw(5000); // should fail due to insufficient balance
    }
}
