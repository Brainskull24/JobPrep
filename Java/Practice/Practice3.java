// Create a Shape class with subclasses Circle, Rectangle, and Triangle. Implement a method area() using runtime polymorphism.
package Practice;
// Base class
abstract class Shape {
    abstract double area(); // abstract method to be overridden
}

// Circle subclass
class Circle extends Shape {
    private final double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

// Rectangle subclass
class Rectangle extends Shape {
    private final double length;
    private final double breadth;

    public Rectangle(double length, double breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    @Override
    double area() {
        return length * breadth;
    }
}

// Triangle subclass
class Triangle extends Shape {
    private final double base;
    private final double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    double area() {
        return 0.5 * base * height;
    }
}

// Driver class
public class Practice3 {
    public static void main(String[] args) {
        Shape s1 = new Circle(5);      // runtime polymorphism
        Shape s2 = new Rectangle(4, 6);
        Shape s3 = new Triangle(3, 7);

        System.out.println("Circle Area: " + s1.area());
        System.out.println("Rectangle Area: " + s2.area());
        System.out.println("Triangle Area: " + s3.area());
    }
}

