package Operators;

public class Main {
    public static void main(String[] args) {
        // Normal Arithmetic operations Not included here
        // check binary strings of any integer
        int c = 2;
        System.out.println(Integer.toBinaryString(c)); // 10

        // Bitwise Operators
        int a = 5;   // 0101 in binary
        int b = 3;   // 0011 in binary

        System.out.println("a = " + a + " (" + Integer.toBinaryString(a) + ")");
        System.out.println("b = " + b + " (" + Integer.toBinaryString(b) + ")");
        System.out.println("------------------------------------");

        // Bitwise AND
        int andResult = a & b;
        System.out.println("a & b = " + andResult + " (" + Integer.toBinaryString(andResult) + ")");

        // Bitwise OR
        int orResult = a | b;
        System.out.println("a | b = " + orResult + " (" + Integer.toBinaryString(orResult) + ")");

        // Bitwise XOR
        int xorResult = a ^ b;
        System.out.println("a ^ b = " + xorResult + " (" + Integer.toBinaryString(xorResult) + ")");

        // Bitwise NOT (unary)
        int notResult = ~a;
        System.out.println("~a = " + notResult + " (" + Integer.toBinaryString(notResult) + ")");

        // Left Shift (<<)
        int leftShift = a << 1;
        System.out.println("a << 1 = " + leftShift + " (" + Integer.toBinaryString(leftShift) + ")");

        // Right Shift (>>)
        int rightShift = a >> 1;
        System.out.println("a >> 1 = " + rightShift + " (" + Integer.toBinaryString(rightShift) + ")");

        // Unsigned Right Shift (>>>)
        int unsignedRightShift = a >>> 1;
        System.out.println("a >>> 1 = " + unsignedRightShift + " (" + Integer.toBinaryString(unsignedRightShift) + ")");

        int x = 10;
        int y = 20;
        boolean condition1 = (x < y);   // true
        boolean condition2 = (x > y);   // false

        System.out.println("x = " + x + ", y = " + y);
        System.out.println("------------------------------------");

        // Logical Operators
        System.out.println("Logical Operators:");
        System.out.println("condition1 = " + condition1);
        System.out.println("condition2 = " + condition2);

        // AND
        System.out.println("condition1 && condition2 = " + (condition1 && condition2));

        // OR
        System.out.println("condition1 || condition2 = " + (condition1 || condition2));

        // NOT
        System.out.println("!condition1 = " + (!condition1));
        System.out.println("!condition2 = " + (!condition2));

        System.out.println("------------------------------------");
        System.out.println("Conditional Statements:");

    }
}
