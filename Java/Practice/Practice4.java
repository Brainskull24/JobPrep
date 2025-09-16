package Practice;

class Temp {
    Temp() {
        System.out.println("Default Constructor of Temp");
    }

    Temp(int x) {
        this();  // calls default constructor of Temp
        System.out.println("Temp Constructor with x: " + x);
    }

    Temp(int x, int y) {
        this(x);  // calls Temp(int x)
        System.out.println("Temp Constructor with x*y: " + (x * y));
    }
}

class SubTemp extends Temp {
    SubTemp() {
        super(); // calls Temp()
        System.out.println("Default Constructor of SubTemp");
    }

    SubTemp(int x) {
        super(x); // calls Temp(int x)
        System.out.println("SubTemp Constructor with x: " + x);
    }

    SubTemp(int x, int y) {
        super(x, y); // calls Temp(int x, int y)
        System.out.println("SubTemp Constructor with x and y: " + x + ", " + y);
    }
}

public class Practice4 {
    public static void main(String[] args) {
        System.out.println("Creating Temp object with (5, 6):");
        Temp t = new Temp(5, 6);

        System.out.println("\nCreating SubTemp object with (3):");
        SubTemp st1 = new SubTemp(3);

        System.out.println("\nCreating SubTemp object with (2, 4):");
        SubTemp st2 = new SubTemp(2, 4);
    }
}
