package Strings;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        String str2 = "   Java Programming   ";
        String str3 = "hello world";

        // 1. length()
        System.out.println("Length: " + str.length());

        // 2. charAt()
        System.out.println("Char at index 4: " + str.charAt(4));

        // 3. substring()
        System.out.println("Substring(0,5): " + str.substring(0, 5));

        // 4. equals() and equalsIgnoreCase()
        System.out.println("Equals: " + str.equals(str3));
        System.out.println("Equals Ignore Case: " + str.equalsIgnoreCase(str3));

        // 5. compareTo() and compareToIgnoreCase()
        System.out.println("CompareTo: " + str.compareTo(str3));
        System.out.println("CompareTo Ignore Case: " + str.compareToIgnoreCase(str3));

        // 6. toUpperCase() and toLowerCase()
        System.out.println("Uppercase: " + str.toUpperCase());
        System.out.println("Lowercase: " + str.toLowerCase());

        // 7. trim()
        System.out.println("Trimmed: '" + str2.trim() + "'");

        // 8. contains()
        System.out.println("Contains 'World': " + str.contains("World"));

        // 9. startsWith() and endsWith()
        System.out.println("Starts with 'Hello': " + str.startsWith("Hello"));
        System.out.println("Ends with 'World': " + str.endsWith("World"));

        // 10. indexOf() and lastIndexOf()
        System.out.println("Index of 'o': " + str.indexOf('o'));
        System.out.println("Last index of 'o': " + str.lastIndexOf('o'));

        // 11. isEmpty()
        String emptyStr = "";
        System.out.println("Is emptyStr empty? " + emptyStr.isEmpty());

        // 12. replace() and replaceAll()
        System.out.println("Replace 'World' with 'Java': " + str.replace("World", "Java"));
        System.out.println("Replace all 'o' with '0': " + str.replaceAll("o", "0"));

        // 13. matches()
        System.out.println("Matches regex 'Hello.*': " + str.matches("Hello.*"));

        // 14. split()
        String[] words = str.split(" ");
        System.out.println("Split words: " + Arrays.toString(words));

        // 15. toCharArray()
        char[] chars = str.toCharArray();
        System.out.println("To Char Array: " + Arrays.toString(chars));

        // 16. join()
        String joined = String.join("-", "Java", "is", "fun");
        System.out.println("Joined string: " + joined);

        // 17. format()
        String formatted = String.format("Name: %s, Age: %d", "Nimit", 22);
        System.out.println("Formatted: " + formatted);

        // 18. valueOf()
        int num = 100;
        String numStr = String.valueOf(num);
        System.out.println("Value of int 100: " + numStr);

        // 19. intern()
        String a = new String("Hello").intern();
        String b = "Hello";
        System.out.println("Intern comparison: " + (a == b));

        // 20. concat()
        System.out.println("Concat: " + str.concat("!!!"));

        // 21. repeat() (Java 11+)
        System.out.println("Repeat 3 times: " + "Hi ".repeat(3));

        // 22. strip(), stripLeading(), stripTrailing() (Java 11+)
        String spaced = "   hello java   ";
        System.out.println("strip(): '" + spaced.strip() + "'");
        System.out.println("stripLeading(): '" + spaced.stripLeading() + "'");
        System.out.println("stripTrailing(): '" + spaced.stripTrailing() + "'");
    }
}

