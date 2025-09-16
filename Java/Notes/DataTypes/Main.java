package DataTypes;

public class Main {
    public static void main(String[] args) {
        // Stack & Heap (String Pool)
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");

        System.out.println(s1 == s2); // true: same reference in pool
        System.out.println(s1 == s3); // false: Different objects
        System.out.println(s2 == s3);  // false: Different objects
        System.out.println(s1.equals(s2)); // true: same content

        String a = "hello";
        String b = a.toUpperCase(); //We need to reinitialize the value of a.toUpperCase()
        System.out.println(a + " " + b);
        a = a.toUpperCase(); // re-assign if needed in "a" itself
        System.out.println(a);

        String text = "Hello world";

        System.out.println(text.length()); // LENGTH OF STRING
        System.out.println(text.charAt(0)); // ACCESS CHARS IN STRING
        System.out.println(text.substring(0, 5)); // FIND SUBSTRING

        // They are case-sensitive functions
        System.out.println(text.contains("WO")); // false
        System.out.println(text.contains("wo")); // true
        System.out.println(text.startsWith("He")); // true
        System.out.println(text.startsWith("HE")); // false

        String newText = text.replace("He", "HII");
        System.out.println(newText + " " + text);
    }
}
