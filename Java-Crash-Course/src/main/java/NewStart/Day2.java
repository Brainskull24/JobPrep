package NewStart;

class MyObject {
    String name;
    public MyObject(String name) {
        this.name = name;
    }
}

class Foo {
    int value;
    String name;

    Foo(int value, String name) {
        this.value = value;
        this.name = name;
    }
}


public class Day2 {
    public static void modifyObject(MyObject o) {
        o.name = "Modified"; // Changes the state of the object pointed to by both references
    }

    public static void reassignObject(MyObject o) {
        o = new MyObject("New Object"); // 'o' now points to a new object, not affecting the original 'obj'
    }

    public static void trySwap(Foo a, Foo b) {
        Foo temp = a;
        a = b;
        b = temp;
    }

    public static void mutateFields(Foo obj) {
        obj.value += 10;
        obj.name = "Updated";
    }

    public static void reassignReference(Foo obj) {
        obj = new Foo(999, "NewObject");
    }

    public static void main(String[] args) {
        int originalValue = 10;
        System.out.println("Before method call: " + originalValue); // Output: 10
        modifyPrimitive(originalValue);
        System.out.println("After method call: " + originalValue);  // Output: 10 (unchanged)

        MyObject obj = new MyObject("Original");
        System.out.println("Before method call: " + obj.name); // Output: Original

        modifyObject(obj);
        System.out.println("After modifying object state: " + obj.name); // Output: Modified

        reassignObject(obj);
        System.out.println("After reassigning object reference: " + obj.name); // Output: Modified (original object unchanged)

        Foo x = new Foo(1, "X");
        Foo y = new Foo(2, "Y");

        trySwap(x, y);
        System.out.println(x.name + ", " + y.name);
        // OUTPUT: X, Y (swap failed)

        mutateFields(x);
        System.out.println(x.value + ", " + x.name);
        // OUTPUT: 11, Updated (mutation succeeded)

        reassignReference(x);
        System.out.println(x.value + ", " + x.name);
        // OUTPUT: 11, Updated (reassignment NOT visible)


    }

    public static void modifyPrimitive(int value) {
        value = 20; // This changes only the copy 'value' within the method
        System.out.println("Inside method: " + value); // Output: 20
    }
}

