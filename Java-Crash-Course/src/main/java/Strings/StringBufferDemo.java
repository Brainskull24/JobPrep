package Strings;

public class StringBufferDemo {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");

        // 1. append()
        sb.append(" World");
        System.out.println("Append: " + sb);

        // 2. insert()
        sb.insert(5, ", Java");
        System.out.println("Insert: " + sb);

        // 3. replace()
        sb.replace(0, 5, "Hi");
        System.out.println("Replace: " + sb);

        // 4. delete()
        sb.delete(3, 9);
        System.out.println("Delete: " + sb);

        // 5. reverse()
        sb.reverse();
        System.out.println("Reverse: " + sb);
        sb.reverse(); // reverse back

        // 6. capacity() & ensureCapacity()
        StringBuffer sb2 = new StringBuffer();
        System.out.println("Default capacity: " + sb2.capacity());
        sb2.ensureCapacity(50);
        System.out.println("After ensureCapacity(50): " + sb2.capacity());

        // 7. length()
        System.out.println("Length: " + sb.length());

        // 8. charAt()
        System.out.println("Char at index 2: " + sb.charAt(2));

        // 9. setCharAt()
        sb.setCharAt(0, 'Y');
        System.out.println("After setCharAt: " + sb);

        // 10. substring()
        System.out.println("Substring(2,6): " + sb.substring(2, 6));

        // 11. deleteCharAt()
        sb.deleteCharAt(0);
        System.out.println("After deleteCharAt(0): " + sb);

        // 12. insert() again with primitive
        sb.insert(0, 123);
        System.out.println("Insert number: " + sb);

        // 13. append with different types
        sb.append(3.14).append(true).append('A');
        System.out.println("Append multiple types: " + sb);

        // 14. capacity grows automatically
        StringBuffer sb3 = new StringBuffer("Data");
        System.out.println("Initial capacity: " + sb3.capacity());
        sb3.append(" Structures and Algorithms in Java");
        System.out.println("Capacity after append: " + sb3.capacity());

        // 15. toString()
        String str = sb3.toString();
        System.out.println("Converted to String: " + str);
    }
}


