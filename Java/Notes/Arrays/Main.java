package Arrays;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class Student {
    public int roll_no;
    public String name;

    Student(int roll_no, String name){
        this.roll_no = roll_no;
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 9, 1, 7};
        int numbers1[] = {1, 2, 3};
        int[] arr1 = new int[]{ 1,2,3,4,5,6,7,8,9,10 };

        System.out.println("Original Array numbers: " + Arrays.toString(numbers));
        System.out.println("Original Array nums: " + Arrays.toString(numbers1));
        System.out.println("Original Array arr: " + Arrays.toString(arr1));

        Student[] arr;
        arr = new Student[5];
        arr[0] = new Student(1, "aman");
        arr[1] = new Student(2, "vaibhav");
        arr[2] = new Student(3, "shikar");
        arr[3] = new Student(4, "dharmesh");
        arr[4] = new Student(5, "mohit");

        for (int i = 0; i < arr.length; i++)
            System.out.println("Element at " + i + " : { "
                    + arr[i].roll_no + " "
                    + arr[i].name+" }");

        // 2. Accessing elements
        System.out.println("First element: " + numbers[0]);
        System.out.println("Last element: " + numbers[numbers.length - 1]);

        // 3. Iterating over array
        System.out.println("\nIterating with for loop:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }

        System.out.println("\nIterating with for-each loop:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }

        // 4. Important Arrays utility methods
        System.out.println("\n\nArray Methods Demo:");

        // asList() method with primitives
        int[] intArr = { 10, 20, 15, 22, 35 };
        System.out.println("Integer Array as List: " + Arrays.asList(intArr)); // [[I@66a29884]

        // asList() method with non-primitives
        Integer[] arr2 = {1, 2, 3, 4, 5};
        List<Integer> list2 = Arrays.asList(arr2);
        System.out.println("Object array with asList: " + list2); // [1, 2, 3, 4, 5]

        // Sorting
        Arrays.sort(intArr);
        System.out.println("Sorted Array: " + Arrays.toString(numbers));

        ArrayList<Integer> list = new ArrayList<>();
        list.add(34);
        list.add(12);
        list.add(9);
        list.add(76);
        list.add(29);

        System.out.println("Original List: " + list);

        // Ascending order
        Collections.sort(list);
        System.out.println("Ascending: " + list);

        // Descending order
        list.sort(Collections.reverseOrder());
        System.out.println("Descending: " + list);

        // Binary Search (array must be sorted first)
        int index = Arrays.binarySearch(numbers, 7);
        System.out.println("Index of 7 after sorting: " + index);

        // Copying arrays
        int[] copy = Arrays.copyOf(numbers, numbers.length);
        System.out.println("Copied Array: " + Arrays.toString(copy));

        // Checking equality
        System.out.println("Arrays equal? " + Arrays.equals(numbers, copy));

        // Filling array with a value
        int[] filled = new int[5];
        Arrays.fill(filled, 10);
        System.out.println("Filled Array: " + Arrays.toString(filled));

        // Converting to String
        System.out.println("numbers as String: " + Arrays.toString(numbers));

        // 5. Multidimensional Arrays
        int[][] matrix = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        System.out.println("\n2D Array (Matrix):");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}
