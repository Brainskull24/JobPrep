// Store 5 student names in an ArrayList and print them using:
    //for loop
    //enhanced for loop
    //Iterator

package Practice;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Practice10 {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        for (Integer integer : list) {
            System.out.println(integer);
        }

        for (int i = 0; i < list.size(); i++){
            System.out.println(list.get(i));
        }

        Iterator<Integer> it = list.iterator();

        while (it.hasNext()) {
            System.out.println("iterator " + it.next());
        }
    }
}
