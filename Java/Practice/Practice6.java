// Write a program that catches ArithmeticException and prints a custom message.

package Practice;

public class Practice6 {
    public static void main(String[] args) {
        try {
            int age = 10;
            int num = age / 0;
            System.out.println(num);

            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);

            String s = null;
            System.out.println(s.length());
        } catch (ArithmeticException e) {
            System.out.println("Custom Message: Cannot divide by zero!");
        } catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Custom Message: Cannot access invalid array index!");
        } catch (NullPointerException e){
            System.out.println("Custom Message: Cannot access null value!");
        } finally {
            System.out.println("Program ends after exception handling...");
        }
    }
}

