package NewStart;

// Java Memory Model (Stack vs Heap) + How objects are stored.
// What happens internally during a Spring Boot Application startup.

class Demo {
    // Static variable -> belongs to the class, NOT objects
    static int staticCount = 0;

    // Instance variable -> each object gets its own copy
    int instanceCount = 0;

    Demo() {
        staticCount++;
        instanceCount++;
    }
}

public class Day1 {
    public static void main(String[] args) {
        Demo obj1 = new Demo();
        Demo obj2 = new Demo();
        Demo obj3 = new Demo();

        System.out.println("=== MEMORY REFERENCES (actually object addresses disguised) ===");
        System.out.println("obj1 -> " + obj1);
        System.out.println("obj2 -> " + obj2);
        System.out.println("obj3 -> " + obj3);

        System.out.println("\n=== HASHCODES (identityHashCode shows actual object identity) ===");
        System.out.println("obj1 hashCode -> " + System.identityHashCode(obj1));
        System.out.println("obj2 hashCode -> " + System.identityHashCode(obj2));
        System.out.println("obj3 hashCode -> " + System.identityHashCode(obj3));

        System.out.println("\n=== STATIC VS INSTANCE VALUES ===");
        System.out.println("obj1.instanceCount = " + obj1.instanceCount);
        System.out.println("obj2.instanceCount = " + obj2.instanceCount);
        System.out.println("obj3.instanceCount = " + obj3.instanceCount);

        System.out.println("\nStatic count (shared by ALL objects): Demo.staticCount = " + Demo.staticCount);

        // modifying using one object
        obj1.staticCount = 10;
        obj1.instanceCount = 99;

        System.out.println("\n=== AFTER MODIFYING obj1 ===");
        System.out.println("obj1.instanceCount = " + obj1.instanceCount); // 99
        System.out.println("obj2.instanceCount = " + obj2.instanceCount); // still 1
        System.out.println("obj3.instanceCount = " + obj3.instanceCount); // still 1

        System.out.println("\nStatic count (same everywhere) = " + Demo.staticCount);
    }
}
