// Use a HashSet to store employee IDs and demonstrate that duplicates are not allowed.
package Practice;

import java.util.HashSet;

public class Practice11 {
    public static void main(String[] args) {
        HashSet<Integer> s = new HashSet<>();
        s.add(5);
        s.add(6);
        s.add(7);
        s.add(5);

        for(Integer i: s){
            System.out.println(i);
        }
    }
}
