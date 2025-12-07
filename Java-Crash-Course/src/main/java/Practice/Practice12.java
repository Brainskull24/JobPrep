package Practice;

import Multithreading.NumberCounter;
import Multithreading.sumCounter;

import java.util.*;

import static java.lang.Math.sqrt;

class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread class: " + i);
        }
    }
}

class MyRunnable implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Runnable interface: " + i);
        }
    }
}

public class Practice12 {
    // O(n)
    public static boolean findIsPrime(int n){
        if(n <= 1) return false;

        for(int i = 2; i < n; i++){
            if(n % i == 0) return false;
        }

        return true;
    }

    // O(sqrt(n))
    public static boolean findIsPrimeOptimized(int n){
        if(n <= 1) return false;

        for(int i = 2; i <= sqrt(n); i++){
            if(n % i == 0) return false;
        }

        return true;
    }

    public static String findWordReverse(String s){
        StringBuilder reversed = new StringBuilder();

        for(int i = s.length() - 1; i >= 0; i--){
            reversed.append(s.charAt(i));
        }

        return reversed.toString();
    }

    public static String reverseWords(String s){
        StringBuilder reversed = new StringBuilder();

        String[] words = s.split(" ");
        for(String st: words){
            for(int i = st.length() - 1; i >= 0; i--){
                reversed.append(st.charAt(i));
            }
            reversed.append(" ");
        }

        return reversed.toString();
    }

    public static int factorial(int number){
        if(number == 0 || number == 1) return 1;

        return number * factorial(number - 1);
    }

    public static boolean checkPalindrome(String s){
        int left = 0;
        int right = s.length() - 1;

        while(left < right){
            if(s.charAt(left) != s.charAt(right)){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static void countOccurrences(String s){
        HashMap<Character, Integer> mpp = new HashMap<Character, Integer>();
        for(int i = 0; i < s.length(); i++){
            mpp.put(s.charAt(i), mpp.getOrDefault(s.charAt(i), 0) + 1);
        }

        for(Map.Entry<Character, Integer> entry: mpp.entrySet()){
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
    }

    public static void removeDuplicates(int[] arr) {
        Set<Integer> set = new HashSet<>();
        for (int num : arr) {
            set.add(num);
        }
        System.out.println("Array without duplicates: " + set);
    }

    public static int findSecondLargest(int[] arr) {
        int largest = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num > second && num < largest) {
                second = num;
            }
        }
        return second;
    }




    public static void main(String[] args) {

        // Find No is prime or not

//        int n;
//        Scanner sc = new Scanner(System.in);
//        n = sc.nextInt();
//
//        System.out.println(findIsPrime(n));
//        System.out.println(findIsPrimeOptimized(n));

        // Find reverse of a string

//        String s;
//        Scanner sc = new Scanner(System.in);
//        s = sc.nextLine();
//
//        System.out.println(findWordReverse(s));

        // Reverse each word in a string

//        String s;
//        Scanner sc = new Scanner(System.in);
//        s = sc.nextLine();
//
//        System.out.println(reverseWords(s));


        // find the factorial of a number using recursion

//        int number;
//        Scanner sc = new Scanner(System.in);
//        number = sc.nextInt();
//
//        System.out.println(factorial(number));


        // Check if a string is a palindrome.

//        String s;
//        Scanner sc = new Scanner(System.in);
//        s = sc.nextLine();
//
//        System.out.println(checkPalindrome(s));

        // Write a program to count occurrences of each character in a string using HashMap.

//        String s;
//        Scanner sc = new Scanner(System.in);
//        s = sc.nextLine();
//        countOccurrences(s);

        // Implement a program that removes duplicates from an array using Collections.
        int[] arr = {1,2,3,4,1,1,2,4,2,42,2,2,11,3,21,3};
        removeDuplicates(arr);

        // Second Largest Element in Array
        System.out.println(findSecondLargest(arr));

        // Write a program to demonstrate multithreading using Thread class and Runnable interface.

        Thread t1 = new MyThread();
        Thread t2 = new Thread(new MyRunnable());
        t1.start();
        t2.start();

    }
}
