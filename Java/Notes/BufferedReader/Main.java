package BufferedReader;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // Reading an integer
        System.out.print("Enter an integer: ");
        int num = Integer.parseInt(br.readLine());

        // Reading a double
        System.out.print("Enter a decimal number: ");
        double d = Double.parseDouble(br.readLine());

        // Reading a single word
        System.out.print("Enter a word: ");
        String word = br.readLine().split(" ")[1]; // takes whole line, so you can split if needed to take like 2nd word

        // Reading a full sentence
        System.out.print("Enter a full sentence: ");
        String sentence = br.readLine();

        // Output
        System.out.println("\n=== OUTPUT ===");
        System.out.println("Integer: " + num);
        System.out.println("Double: " + d);
        System.out.println("Word: " + word);
        System.out.println("Sentence: " + sentence);
    }
}
