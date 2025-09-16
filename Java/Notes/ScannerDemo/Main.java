package ScannerDemo;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Reading an integer
        System.out.print("Enter an integer: ");
        int num = sc.nextInt();

        // Reading a double
        System.out.print("Enter a decimal number: ");
        double d = sc.nextDouble();

        // Reading a single word (string without spaces)
        System.out.print("Enter a word: ");
        String word = sc.next();

        // Consuming the leftover newline before using nextLine()
        sc.nextLine();

        // Reading a full line
        System.out.print("Enter a full sentence: ");
        String sentence = sc.nextLine();

        // Output
        System.out.println("\n=== OUTPUT ===");
        System.out.println("Integer: " + num);
        System.out.println("Double: " + d);
        System.out.println("Word: " + word);
        System.out.println("Sentence: " + sentence);

        sc.close();
    }
}
