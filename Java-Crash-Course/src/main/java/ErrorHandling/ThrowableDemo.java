package ErrorHandling;

import java.io.*;

public class ThrowableDemo {
    public static void main(String[] args) {
        try {
            // Force an exception (divide by zero)
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("=== Throwable Methods Demo ===");

            // 1. getMessage()
            System.out.println("getMessage(): " + e.getMessage());

            // 2. getLocalizedMessage()
            System.out.println("getLocalizedMessage(): " + e.getLocalizedMessage());

            // 3. toString()
            System.out.println("toString(): " + e.toString());

            // 4. printStackTrace()
            System.out.println("\nprintStackTrace():");
            e.printStackTrace();

            // 5. getStackTrace()
            System.out.println("\ngetStackTrace():");
            for (StackTraceElement ste : e.getStackTrace()) {
                System.out.println(ste);
            }

            // 6. getCause() (default is null)
            System.out.println("\ngetCause(): " + e.getCause());

            // 7. initCause()
            try {
                Throwable newEx = new IOException("Root Cause");
                e.initCause(newEx);
                System.out.println("After initCause(): " + e.getCause());
            } catch (IllegalStateException ise) {
                // If cause already initialized, it throws IllegalStateException
                System.out.println("Cause already set, cannot re-init.");
            }

            // 8. addSuppressed() and getSuppressed()
            Exception suppressedEx = new Exception("Suppressed Exception Example");
            e.addSuppressed(suppressedEx);
            System.out.println("\nSuppressed Exceptions:");
            for (Throwable t : e.getSuppressed()) {
                System.out.println(t);
            }

            // 9. fillInStackTrace()
            Throwable filled = e.fillInStackTrace();
            System.out.println("\nfillInStackTrace(): " + filled);
        }
    }
}
