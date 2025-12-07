package Practice;

// INTERFACE Example
interface Vehicle {
    void getName();   // abstract by default
    void getType();
}

// ABSTRACT CLASS Example
abstract class Humans {
    String category = "Mammal";   // abstract class can have state

    abstract void getName(String name); // abstract method

    // concrete method
    public void getType() {
        System.out.println("Type: " + category);
    }
}

// Concrete class extending abstract class
class Man extends Humans {
    @Override
    public void getName(String name) {
        System.out.println("Man Name: " + name);
    }
}

// Concrete class implementing interface
class Car implements Vehicle {
    private String name;
    private String type;

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public void getName() {
        System.out.println("Car Name: " + this.name);
    }

    @Override
    public void getType() {
        System.out.println("Car Type: " + this.type);
    }
}

// Driver class
public class Practice2 {
    public static void main(String[] args) {
        // Using Interface
        Car c = new Car();
        c.setName("Honda Civic");
        c.setType("Sedan");
        c.getName();
        c.getType();

        // Using Abstract Class
        Humans h = new Man();
        h.getName("Nimit");
        h.getType(); // calls concrete method from abstract class
    }
}
