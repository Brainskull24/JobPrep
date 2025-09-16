package OOPS.Inheritance;

// Demonstrating all important concepts of Inheritance in Java

// 1. Base Class (Parent)
class Animal {
    String name;

    Animal(String name) {   // Constructor
        this.name = name;
        System.out.println("Animal constructor called for " + name);
    }

    void sound() {
        System.out.println(name + " makes a sound");
    }
}

// 2. Single Inheritance (Dog inherits Animal)
class Dog extends Animal {
    Dog(String name) {
        super(name); // Call parent constructor
        System.out.println("Dog constructor called for " + name);
    }

    // Method Overriding
    @Override
    void sound() {
        super.sound(); // Call parent method
        System.out.println(name + " barks");
    }
}

// 3. Multilevel Inheritance (Puppy inherits Dog, Dog inherits Animal)
class Puppy extends Dog {
    Puppy(String name) {
        super(name);
        System.out.println("Puppy constructor called for " + name);
    }

    @Override
    void sound() {
        System.out.println(name + " yelps softly");
    }
}

// 4. Hierarchical Inheritance (Cat also inherits Animal)
class Cat extends Animal {
    Cat(String name) {
        super(name);
        System.out.println("Cat constructor called for " + name);
    }

    @Override
    void sound() {
        System.out.println(name + " meows");
    }
}

// 5. Interface (Multiple Inheritance with Interfaces)
interface Pet {
    void play();
}

class Rabbit extends Animal implements Pet {
    Rabbit(String name) {
        super(name);
    }

    @Override
    void sound() {
        System.out.println(name + " squeaks");
    }

    @Override
    public void play() {
        System.out.println(name + " loves to play");
    }
}

// 6. Main Class
public class Inheritance {
    public static void main(String[] args) {
        System.out.println("=== Single Inheritance ===");
        Dog dog = new Dog("Tommy");
        dog.sound();

        System.out.println("\n=== Multilevel Inheritance ===");
        Puppy puppy = new Puppy("Rocky");
        puppy.sound();

        System.out.println("\n=== Hierarchical Inheritance ===");
        Cat cat = new Cat("Kitty");
        cat.sound();

        System.out.println("\n=== Interface Inheritance (Multiple Inheritance) ===");
        Rabbit rabbit = new Rabbit("Bunny");
        rabbit.sound();
        rabbit.play();

        System.out.println("\n=== instanceof Operator ===");
        System.out.println("dog instanceof Animal: " + (dog instanceof Animal));
        System.out.println("puppy instanceof Dog: " + (puppy instanceof Dog));
        System.out.println("cat instanceof Animal: " + (cat instanceof Animal));
        System.out.println("rabbit instanceof Pet: " + (rabbit instanceof Pet));
    }
}

