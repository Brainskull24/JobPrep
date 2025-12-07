// Show exception handling with method overriding (parent throws checked exception, child throws narrower one).
package Practice;

import java.io.IOException;

// Parent class
class Parent {
    public void show() throws IOException {  // parent throws a checked exception
        System.out.println("Parent show() method");
        throw new IOException("Parent exception");
    }
}

// Child class
class Child extends Parent {
    @Override
    public void show() throws java.io.FileNotFoundException { // narrower exception
        System.out.println("Child show() method");
        throw new java.io.FileNotFoundException("Child exception");
    }
}

public class Practice8 {
    public static void main(String[] args) {
        Parent obj = new Child(); // runtime polymorphism

        try {
            obj.show();
        } catch (IOException e) {   // can catch IOException (parent type)
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}
