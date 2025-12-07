// Create a custom exception InvalidAgeException and throw it if a person’s age is less than 18.

package Practice;

// Custom Exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

class Person {
    private final String name;
    private int age;

    public Person(String name, int age) throws InvalidAgeException {
        this.name = name;
        setAge(age);  // validate through setter
    }

    public void setAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above. Entered: " + age);
        }
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }
}

public class Practice7 {
    public static void main(String[] args) {
        try {
            Person p1 = new Person("Nimit", 16); // invalid age
            System.out.println("Person created: " + p1.getName() + ", Age: " + p1.getAge());
        } catch (InvalidAgeException e) {
            System.out.println("Custom Exception Caught: " + e.getMessage());
        }

        try {
            Person p2 = new Person("Abc", 20); // valid age
            System.out.println("Person created: " + p2.getName() + ", Age: " + p2.getAge());
        } catch (InvalidAgeException e) {
            System.out.println("Custom Exception Caught: " + e.getMessage());
        }
    }
}
