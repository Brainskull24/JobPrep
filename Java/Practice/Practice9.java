// Write code to demonstrate chained exceptions.
package Practice;

public class Practice9 {
    public static void main(String[] args) {
        try {
            try {
                // Root cause: divide by zero
                int result = 10 / 0;
            } catch (ArithmeticException e) {
                // Wrap ArithmeticException inside a new Exception
                throw new Exception("Top-level Exception: Invalid calculation", e);
            }
        } catch (Exception ex) {
            System.out.println("Caught Exception: " + ex.getMessage());
            System.out.println("Original Cause: " + ex.getCause());
        }
    }
}
