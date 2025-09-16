package Loops;

public class Main {
    public static void main(String[] args) {
        int x = 10;
        int y = 20;

        if (x < y) {
            System.out.println("if: x is less than y");
        }

        // if-else statement
        if (x > y) {
            System.out.println("if-else: x is greater than y");
        } else {
            System.out.println("if-else: x is NOT greater than y");
        }

        // if-else-if ladder
        if (x > y) {
            System.out.println("if-else-if: x > y");
        } else if (x == y) {
            System.out.println("if-else-if: x == y");
        } else {
            System.out.println("if-else-if: x < y");
        }

        // switch statement
        int day = 3; // Example: 3 = Wednesday
        System.out.println("switch statement (day = " + day + "):");

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day number");
        }
    }
}
