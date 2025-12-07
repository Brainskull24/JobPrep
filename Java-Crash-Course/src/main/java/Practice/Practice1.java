// Write a program to demonstrate method overloading and method overriding.

package Practice;
class Human {
    public int age;
    private int category;

    public void printAge() {
        System.out.println("Age is printed " + age);
    }

    public void printAge(int age){
        System.out.println("Age is printed " + age);
    }
}

class Student extends Human {
    public void printAge(int age){
        System.out.println("age: " + age);
    }
}

public class Practice1 {
    public static void main(String[] args) {
        Student s = new Student();
        s.printAge(2);
        Human h = new Human();
        h.age = 5;
        h.printAge();
        h.printAge(6);
    }
}
