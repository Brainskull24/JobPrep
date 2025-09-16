package Regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        String regex = "\\d+";  // matches one or more digits
        String input = "My number is 12345";

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(input);

        while (matcher.find()) {
            System.out.println("Found: " + matcher.group());
        }

        String text = "Email: test@example.com, Phone: 9876543210";

        // Pattern for email
        Pattern emailPattern = Pattern.compile("[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+");
        Matcher emailMatcher = emailPattern.matcher(text);
        if(emailMatcher.find()) {
            System.out.println("Email Found: " + emailMatcher.group());
        }

        // Pattern for phone
        Pattern phonePattern = Pattern.compile("\\d{10}");
        Matcher phoneMatcher = phonePattern.matcher(text);
        if(phoneMatcher.find()) {
            System.out.println("Phone Found: " + phoneMatcher.group());
        }

        // Replace digits
        String replaced = text.replaceAll("\\d", "*");
        System.out.println("Text after replacing digits: " + replaced);

        // Split string by space
        String[] parts = text.split("\\s+");
        System.out.println("Split text:");
        for(String part : parts){
            System.out.println(part);
        }

        String text1 = "Hello 123 World 456";
        String result = text1.replaceAll("\\d", "#");
        System.out.println(result); // Hello ### World ###
    }
}
