//package OOPS;
//
//// 1. Class & Object
//class Car {
//    String brand;
//    int year;
//
//    // Constructor
//    Car(String brand, int year) {
//        this.brand = brand;
//        this.year = year;
//    }
//
//    void display() {
//        System.out.println("Car: " + brand + ", Year: " + year);
//    }
//}
//
//// 2. Encapsulation
//class BankAccount {
//    private double balance;  // private field (data hiding)
//
//    // Constructor
//    BankAccount(double balance) {
//        this.balance = balance;
//    }
//
//    // Getter
//    public double getBalance() {
//        return balance;
//    }
//
//    // Setter with condition
//    public void deposit(double amount) {
//        if (amount > 0) {
//            balance += amount;
//            System.out.println("Deposited: " + amount);
//        }
//    }
//}
//
//// 3. Inheritance
//class Animal {
//    void sound() {
//        System.out.println("Animal makes a sound");
//    }
//}
//
//// Child class inherits parent
//class Dog extends OOPS.Inheritance.Animal {
//    // 4. Polymorphism (Runtime - Method Overriding)
//    @Override
//    void sound() {
//        System.out.println("Dog barks");
//    }
//}
//
//// 4. Polymorphism (Compile-time - Method Overloading)
//class MathUtils {
//    int add(int a, int b) {
//        return a + b;
//    }
//
//    double add(double a, double b) {
//        return a + b;
//    }
//}
//
//// 5. Abstraction
//abstract class Shape {
//    abstract void draw();  // abstract method
//}
//
//class Circle extends Shape {
//    void draw() {
//        System.out.println("Drawing Circle");
//    }
//}
//
//// Interface example
//interface Vehicle {
//    void start();
//}
//
//class Bike implements Vehicle {
//    public void start() {
//        System.out.println("Bike started");
//    }
//}
//
//// Main class to demonstrate all OOP concepts
//public class Main {
//    public static void main(String[] args) {
//        System.out.println("=== 1. Class & Object ===");
//        Car car = new Car("Toyota", 2022);
//        car.display();
//
//        System.out.println("\n=== 2. Encapsulation ===");
//        BankAccount account = new BankAccount(1000);
//        System.out.println("Balance: " + account.getBalance());
//        account.deposit(500);
//        System.out.println("Updated Balance: " + account.getBalance());
//
//        System.out.println("\n=== 3. Inheritance & 4. Polymorphism ===");
//        OOPS.Inheritance.Animal a = new OOPS.Inheritance.Animal();
//        a.sound();
//
//        OOPS.Inheritance.Animal d = new OOPS.Inheritance.Dog(); // Polymorphism
//        d.sound();
//
//        MathUtils mu = new MathUtils();
//        System.out.println("Add int: " + mu.add(5, 10));
//        System.out.println("Add double: " + mu.add(5.5, 2.5));
//
//        System.out.println("\n=== 5. Abstraction ===");
//        Shape shape = new Circle();
//        shape.draw();
//
//        Vehicle bike = new Bike();
//        bike.start();
//    }
//}
