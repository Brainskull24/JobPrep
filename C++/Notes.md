Quick Points

- C++ is a cross-platform language that can be used to create high-performance applications.
- The main difference between C and C++ is that C++ support classes and objects, while C does not.
- #include <iostream> is a header file library.
- using namespace std means that we can use names for objects and variables from the standard library.
- The newline character (\n) is called an escape sequence.
- we use // for short comments, and /* */ for longer.
- cout is pronounced "see-out". Used for output, and uses the insertion operator (<<).
- cin is pronounced "see-in". Used for input, and uses the extraction operator (>>).
- float vs. double - 
		- The precision of a floating point value indicates how many digits the value can have after the decimal point. The precision of float is only six or seven decimal digits, while double variables have a precision of about 15 digits. Therefore it is safer to use double for most calculations.
- The backslash (\) escape character turns special characters into string characters:
		- string txt = "It\'s alright.";
		- string txt = "We are the so-called \"Vikings\" from the north.";
- cin won't consider the input after whitespaces ( like if you input john doe it will consider john only).
- To create a structure, use the struct keyword and declare each of its members inside curly braces.
- You can use a comma (,) to use one structure in many variables:

```
struct {
    int myNum;
    string myString;
} myStruct1, myStruct2, myStruct3;
```

- An enum is a special type that represents a group of constants (unchangeable values).
- To create an enum, use the enum keyword, followed by the name of the enum, and separate the enum items with a comma:

```
enum Level {  
  LOW,
  MEDIUM,
  HIGH
};
```

- A reference variable is a "reference" to an existing variable, and it is created with the & operator:

```
string food = "Pizza";
string &meal = food;

cout << food << "\n";  // Outputs Pizza
cout << meal << "\n";  // Outputs Pizza
cout << &food; // Outputs 0x6dfed4 as it outputs the memory address of food
```

boolean
1 byte
Stores true or false values
char
1 byte
Stores a single character/letter/number, or ASCII values
int
2 or 4 bytes
Stores whole numbers, without decimals
float
4 bytes
Stores fractional numbers, containing one or more decimals. Sufficient for storing 6-7 decimal digits
double
8 bytes
Stores fractional numbers, containing one or more decimals. Sufficient for storing 15 decimal digits

Pointers


Introduction

- A pointer however, is a variable that stores the memory address as its value or we can say store address of another variable.

```
string food = "Pizza";  // A food variable of type string
string* ptr = &food;    // A pointer variable, with the name ptr, that stores the address of food

// Output the value of food (Pizza)
cout << food << "\n";

// Output the memory address of food (0x6dfed4)
cout << &food << "\n";

// Output the memory address of food with the pointer (0x6dfed4)
cout << ptr << "\n";

// Dereference: Output the value of food with the pointer (Pizza)
cout << *ptr << "\n";
```

- Note that the * sign can be confusing here, as it does two different things in our code:
		- When used in declaration (string* ptr), it creates a pointer variable.
		- When not used in declaration, it act as a dereference operator.

```
string food = "Pizza";
string* ptr = &food;

// Output the value of food (Pizza)
cout << food << "\n";

// Output the memory address of food (0x6dfed4)
cout << &food << "\n";

// Access the memory address of food and output its value (Pizza)
cout << *ptr << "\n";

// Change the value of the pointer
*ptr = "Hamburger";

// Output the new value of the pointer (Hamburger)
cout << *ptr << "\n";

// Output the new value of the food variable (Hamburger)
cout << food << "\n";
```

- Here we can see when we modify the value of *ptr it also modifies the value of food..


Pointers Arithmetic


```
int a = 10;
int* p;
p = &a;

printf("%d\n", p);        // p is 2002
printf(sizeof(int));      // size of integer is 4
printf("%d\n", p+1);      // p is 2006 (2002 + 4)
```

```
// lets say i have a pointer of type int

int a = 1025;
int* p;
p = &a;

// value of p = 4456036 and *p = 1025.
// value of p+1 = 4456040 and *(p+1) = -876543223.

char* p1;
p1 = p; // now this will throw an error because both pointers are of different            data types

p1 = (char*)p; // typecasting of pointers

// value of p1 = 4456036 and *p1 = 1.
// value of p1+1 = 4456037 and *(p1+1) = 4.

// when we define a pointer to another pointer then address will remain same 
```



Pointer to Pointer


```
int x = 5;
int* p;
p = &x;

int** q = &p;

int*** r = &q;
```


Pointer as function Arguments - Call By Reference


```
#include <stdio.h>
void Increment(int a){
    a = a + 1;
}

int main(){
    int a;  
    a = 10;
    Increment(a);
    printf("%d\n", a) // it will output 10 not 11 because both a's are                                 different
}
```

So instead what we do is either we pass the address of the variable in the function as shown below:

```
#include <stdio.h>
void Increment(int *a){
    *a = *a + 1;
}

int main(){
    int a;  
    a = 10;
    Increment(&a);
    printf("%d\n", a) // it will output 11
}
```

Or we can directly pass the variable through reference as shown below:

```
#include <stdio.h>
void Increment(int &a){
    a = a + 1;
}

int main(){
    int a;  
    a = 10;
    Increment(a);
    printf("%d\n", a) // it will output 11
}
```


Pointers and Arrays


```
int a[5];
int *p;
p = a;

print(a) // will give address as output
print(*a)  // will give value as output

print(a+1) // will give next address as output
print(*a+1) // will give next value as output

for ex in case of an array [2,4,5,8] where addresses are 200, 204, 208, 212
outputs will be: 

200
2

204
4 
```

```
Address of Element at index i is fetched using &a[i] or (a+i)
Value of Element at index i is fetched using a[i] or *(a+i)
```

```
if we are given an array a
then a will provide us the address of first element.
and *a will provide us the value of first element.
```


Character Arrays and Pointers


- We need to create a char array of 1 extra space for null character to tell the compiler that the string has ended otherwise we'll end up receiving a garbage value.

```
char C[4];
C[0] = 'J';
C[1] = 'O';
C[2] = 'H';
C[3] = 'N';

printf("%s",C); // it will print JOHNnjedfj with some garbage value

but if we initialize 
C[4] = '\0';
then 

printf("%s",C);  // It will print JOHN as the output

we can also use 

char c[] = "JOHN" or char c[5] = "JOHN" // here the null char is implicit

char c[5] - {'J','O','H','N','\0'}; // here we need to give null char
```

- Arrays are always passed in the functions by reference only.


OOPS


Introduction

- Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance by providing some concepts.
- Class is a user-defined data type which defines its properties and its functions. 
- Class is the only logical representation of the data. 
- For example, Human being is a class. The body parts of a human being are its properties, and the actions performed by the body parts are known as functions. 
- The class does not occupy any memory space till the time an object is instantiated.

```
class student{
    public:
    int id; // data member
    int mobile;
    string name;
    int add(int x, int y){ // member functions
        return x + y;
    }
};
```

- Object is a run-time entity. It is an instance of the class. An object can represent a person, place or any other item. 
- An object can operate on both data members and member functions.

```
student s = new student();
```

When an object is created using a new keyword, then space is allocated for the variable in a heap, and the starting address is stored in the stack memory. When an object is created without a new keyword, then space is not allocated in the heap memory, and the object contains the null value in the stack.
Benefits of OOP

1. Modularity and Reusability: OOP allows building programs from standard modules that communicate with each other, saving development time and enhancing productivity. 
2. Problem Decomposition: Programs can be broken down into bit-sized problems that are easier to solve, one object at a time, which simplifies project partitioning and management.
3. Security and Encapsulation: The principle of data hiding helps build secure programs that are less prone to invasion from code in other parts of the program.
4. Simplified Communication: Message passing techniques used for communication between objects make interface descriptions with external systems much simpler and more efficient.

Disadvantages of OOP

1. Increased Program Length and Execution Time: Programs developed using OOP tend to be larger and require more time to execute, leading to slower performance compared to procedural approaches.
2. Skill Requirements: Programmers need to have strong design and programming skills, along with proper planning, as OOP can be complex and tricky to implement effectively.
3. Learning Curve: The thought process involved in object-oriented programming may not come naturally to everyone, and it takes time to get used to thinking in terms of objects.
4. Object-Oriented Thinking: Since everything is treated as an object in OOP, it requires excellent conceptual thinking in terms of objects before implementation.

Differences between Object Oriented and Object Based Languages

Object Oriented Languages
Object Based Languages
follows all concepts of Object Oriented Programming like Encapsulation, Abstraction, Inheritance and Polymorphism.
Don’t follow all the concepts of OOP like Inheritance or Polymorphism.
Don’t have any built-in objects, developers create and work with objects of built-in classes
Offer built-in objects such as window (JavaScript)
Common Examples are C#, Java, Python etc.
JavaScript (to some extent), Visual Basic 6, and early versions of JavaScript before it became more object-oriented with ES6.

Inheritance

- Inheritance is a process in which one object acquires all the properties and behaviors of its parent object automatically. 
- In C++, the class which inherits the members of another class is called derived class and the class whose members are inherited is called base class.

```
class derived_class :: private base_class;
class derived_class :: public base_class;
class derived_class :: protected base_class;
```

        Types of Inheritance

		1. Single inheritance : When one class inherits another class, it is known as single level inheritance
		2. Multiple inheritance : Multiple inheritance is the process of deriving a new class that inherits the attributes from two or more classes.
		3. Hierarchical inheritance : Hierarchical inheritance is defined as the process of deriving more than one class from a base class.
		4. Multilevel inheritance : Multilevel inheritance is a process of deriving a class from another derived class.
		5. Hybrid inheritance : Hybrid inheritance is a combination of simple, multiple inheritance and hierarchical inheritance.

Encapsulation

- Encapsulation is the process of combining data and functions into a single unit called class.
- In Encapsulation, the data is not accessed directly; it is accessed through the functions present inside the class. 
- In simpler words, attributes of the class are kept private and public getter and setter methods are provided to manipulate these attributes. 
- Thus, encapsulation makes the concept of data hiding possible.(Data hiding: a language feature to restrict access to members of an object, reducing the negative effect due to dependencies. e.g. "protected", "private" feature in C++).

Abstraction

- We try to obtain an abstract view, model or structure of a real life problem, and reduce its unnecessary details. 
- With definition of properties of problems, including the data which are affected and the operations which are identified, the model abstracted from problems can be a standard solution to this type of problems. 
- It is an efficient way since there are nebulous real-life problems that have similar properties.

       Data binding 

	Data binding is a process of binding the application UI and business logic. Any change made in the business logic will reflect directly to the application UI.

Polymorphism

- Polymorphism is the ability to present the same interface for differing underlying forms (data types). 
- With polymorphism, each of these classes will have different underlying data. 
- A point shape needs only two coordinates (assuming it's in a two-dimensional space of course). A circle needs a center and radius. An irregular polygon needs a series of lines. Precisely, Poly means ‘many’ and morphism means ‘forms’.

Types of Polymorphism

1. Compile Time Polymorphism (Static)
2. Runtime Polymorphism (Dynamic)

Compile Time Polymorphism :
The polymorphism which is implemented at the compile time is known as compile-time polymorphism. Example - Method Overloading

Method Overloading : 
Method overloading is a technique which allows you to have more than one function with the same function name but with different functionality. Method overloading can be possible on the following basis:
1. The return type of the overloaded function.
2. The type of the parameters passed to the function.
3. The number of parameters passed to the function.

```
#include<bits/stdc++.h>
using namespace std;
class Add {
    public:
    int add(int a,int b){
        return (a + b);
    }
    int add(int a,int b,int c){
        return (a + b + c);
    }
};

int main(){
    Add obj;
    int res1,res2;
    res1 = obj.add(2,3);
    res2 = obj.add(2,3,4);
    cout << res1 << " " << res2 << endl;
    return 0;
}
/*
Output : 5 9
add()is an overloaded function with a different number of parameters. */
```

Runtime Polymorphism : 
- Runtime polymorphism is also known as dynamic polymorphism. Function overriding is an example of runtime polymorphism. 
- Function overriding means when the child class contains the method which is already present in the parent class. Hence, the child class overrides the method of the parent class. 
- In case of function overriding, parent and child classes both contain the same function with a different definition. The call to the function is determined at runtime is known as runtime polymorphism.

```
#include <bits/stdc++.h>
using namespace std;

class Base_class{
    public:
    virtual void show(){ // Without virtual base class function would be called
        cout << "Apni Kaksha base" << endl;
    }
};

class Derived_class : public Base_class{
    public:
    void show(){
        cout << "Apni Kaksha derived" << endl;
    }
};
int main(){
    Base_class* b;
    Derived_class d;
    b = &d;
    b->show(); // prints the content of show() declared in derived
    return 0;
}
// Output : Apni Kaksha derived
```

Constructor

- Constructor is a special method which is invoked automatically at the time of object creation. It is used to initialize the data members of new objects generally. 
- The constructor in C++ has the same name as class or structure.


Types of Constructors in C++


1. Default constructor : 
A constructor which has no argument is known as default constructor. It is invoked at the time of creating an object.

2. Parameterized constructor : 
Constructor which has parameters is called a parameterized constructor. It is used to provide
different values to distinct objects.

3. Copy Constructor : 
A Copy constructor is an overloaded constructor used to declare and initialize an object from another
object. 
It is of two types - default copy constructor and user defined copy constructor.

```
#include <bits/stdc++.h>
using namespace std;
class go {
    public:
    int x;
    go(int a){ // parameterized constructor.
        x=a;
    }
    go(go &i){ // copy constructor
        x = i.x;
    }
};
int main(){
    go a1(20); // Calling the parameterized constructor.
    go a2(a1); // Calling the copy constructor.
    cout << a2.x << endl;
    return 0;
}
// Output : 20
```

Destructor

- A destructor works opposite to constructor; it destructs the objects of classes. It can be defined only once in a class. Like constructors, it is invoked automatically. 
- A destructor is defined like a constructor. It must have the same name as class, prefixed with a tilde sign (~).

```
#include<bits/stdc++.h>
using namespace std;
class A{
    public:
// constructor and destructor are called automatically, once the object is instantiated
    A(){
        cout << "Constructor in use" << endl;
    }
    ~A(){
        cout << "Destructor in use" << endl;
    }
};

int main(){
    A a;
    A b;
    return 0;
}
/*
Output: Constructor in use
Constructor in use
Destructor in use
Destructor in use
*/
```

this Pointer  

'this' is a keyword that refers to the current instance of the class. 
There can be 3 main uses of ‘this’ keyword:
1. It can be used to pass the current object as a parameter to another method
2. It can be used to refer to the current class instance variable.
3. It can be used to declare indexers.

```
struct node{
    int data;
    node *next;
    node(int x){
        this->data = x;
        this->next = NULL;
    }
}
```


Friend Function 

- Friend function acts as a friend of the class. It can access the private and protected members of the class. 
- The friend function is not a member of the class, but it must be listed in the class definition. The non-member function cannot access the private data of the class. 
- Sometimes, it is necessary for the non-member function to access the data.
- The friend function is a non-member function and has the ability to access the private data of the class.

1. A friend function cannot access the private members directly, it has to use an object name and dot operator with each member name.
2. Friend function uses objects as arguments.
```
#include <bits/stdc++.h>
using namespace std;
class A{
    int a = 2;
    int b = 4;
    public:
    // friend function
    friend int mul(A k){
        return (k.a * k.b);
    }
};

int main(){
    A obj;
    int res = mul(obj);
    cout << res << endl;
    return 0;
}
// Output : 8
```

Virtual Function

A virtual function is used to replace the implementation provided by the base class. The replacement is always called whenever the object in question is actually of the derived class, even if the object is accessed by a base pointer rather than a derived pointer.

1. A virtual function is a member function which is present in the base class and redefined by the derived class.
2. When we use the same function name in both base and derived class, the function in base class is declared with a keyword virtual.
3. When the function is made virtual, then C++ determines at run-time which function is to be called based on the type of the object pointed by the base class pointer. Thus, by making the base class pointer to point to different objects, we can execute different versions of the virtual functions.

1. Virtual functions cannot be static.
2. A class may have a virtual destructor but it cannot have a virtual constructor.
```
#include <bits/stdc++.h>
using namespace std;

class base {
    public:
    // virtual function (re-defined in the derived class)
    virtual void print(){
        cout << "print base class" << endl;
    }
    void show(){
        cout << "show base class" << endl;
    }
};

class derived : public base {
    public:
    void print(){
        cout << "print derived class" << endl;
    }
    void show(){
        cout << "show derived class" << endl;
    }
};

int main(){
    base* bptr;
    derived d;
    bptr = &d;
    // virtual function, binded at runtime
    bptr->print();
    // Non-virtual function, binded at compile time
    bptr->show();
}
/*
output :
print derived class // (impact of virtual function)
show base class
*/
```

Pure Virtual Function

1.  A pure virtual function is not used for performing any task. It only serves as a placeholder.
2. A pure virtual function is a function declared in the base class that has no definition relative to the base class.
3. A class containing the pure virtual function cannot be used to declare the objects of its own, such classes are known as abstract base classes.
4. The main objective of the base class is to provide the traits to the derived classes and to create the base pointer used for achieving the runtime polymorphism.

```
virtual void display() = 0; // syntax for virtual functions
```

```
#include<bits/stdc++.h>
using namespace std;
class Base{
    public:
    virtual void show() = 0;
};
class Derived : public Base {
    public:
    void show() {
        cout << "You can see me !" << endl;
    }
};

int main(){
    Base *bptr;
    Derived d;
    bptr = &d;
    bptr->show();
    return 0;
}
// output : You can see me !
```

Abstract Classes

- In C++ class is made abstract by declaring at least one of its functions as a pure virtual function. 
- A pure virtual function is specified by placing "= 0" in its declaration. Its implementation must be provided by derived classes.

```
#include<bits/stdc++.h>
using namespace std;
// abstract class
class Shape{
    public:
    virtual void draw()=0;
};

class Rectangle : Shape{
    public:
    void draw(){
        cout << "Rectangle" << endl;
    }
};

class Square : Shape{
    public:
    void draw(){
        cout << "Square" << endl;
    }
};

int main(){
    Rectangle rec;
    Square sq;
    rec.draw();
    sq.draw();
    return 0;
}
/*
Output :
Rectangle
Square
*/
```

Access Specifiers 

The access specifiers are used to define how functions and variables can be accessed outside the class. 
There are three types of access specifiers:
1. Private: Functions and variables declared as private can be accessed only within the same class, and they cannot be accessed outside the class they are declared.
2. Public: Functions and variables declared under public can be accessed from anywhere.
3. Protected: Functions and variables declared as protected cannot be accessed outside the class except a child class. This specifier is generally used in inheritance.

Final Keyword

- The final keyword in C++ is used to prevent further inheritance of classes or overriding of virtual functions. 
- This keyword was introduced in C++11 and serves two primary purposes: ensuring a class cannot be subclassed and ensuring a virtual function cannot be overridden in derived classes.

Preventing Class Inheritance

- When the final keyword is applied to a class, it prevents any other class from inheriting from it. 
- This is useful when you want to create a class that should not be extended further for reasons such as security, integrity, or design constraints.

```
class ClassName final {
    // Class definition
};
```

```
class Base final {
public:
    void display() {
        cout << "Base class display function" << endl;
    }
};

// This will cause a compile-time error
class Derived : public Base {
};
```

In this example, attempting to create a Derived class from Base will result in a compile-time error because Base is marked as final.

Preventing Function Overriding

- When the final keyword is applied to a virtual function, it prevents derived classes from overriding this function. 
- This ensures that the function's behavior remains consistent across the class hierarchy.

```
class Base {
public:
    virtual void display() final {
        // Function definition
    }
};
```

```
class Base {
public:
    virtual void display() final {
        cout << "Base class display function" << endl;
    }
};

class Derived : public Base {
public:
    // This will cause a compile-time error
    void display() override {
        cout << "Derived class display function" << endl;
    }
};
```

In this example, attempting to override the display function in the Derived class will result in a compile-time error because display is marked as final in the Base class.

Static Keyword

The static keyword in C++ has specific uses and effects on variables and functions, giving them a unique set of behaviors and lifetimes.
1. Static Variables:
	- Initialization: Static variables are initialized only once. If not explicitly initialized, their default value is zero.
	- Lifetime: They persist for the lifetime of the program, maintaining their value even after the scope in which they are defined has been exited.
	- Scope: Static variables can be defined inside or outside a function but are local to the block in which they are defined.

1. Static Functions:
	- Access: Static functions can be called directly using the class name without needing to create an instance of the class.
	- Behavior: They cannot access non-static members of the class.

```
static datatype variable_name = value; // Static variable
static return_type function_name {     // Static function
   ...
}

```

- datatype: The data type of the variable, such as int, char, float, etc.
- variable_name: The name given to the variable.
- value: The initial value assigned to the variable. The default is zero.
- return_type: The data type of the function's return value.
- function_name: The name given to the function.


Example of Static Variable and Function in C++


```
#include <bits/stdc++.h>
using namespace std;

class Base {
public:
   static int val;
   static int func(int a) {
      cout << "\nStatic member function called";
      cout << "\nThe value of a : " << a;
   }
};

int Base::val = 28;

int main() {
   Base b;
   Base::func(8);
   cout << "\nThe static variable value : " << b.val;
   return 0;
}
```

Output:

```
Static member function called
The value of a : 8
The static variable value : 28
```

Explanation

1. Static Variable Declaration:
	- Declares a static variable val in the Base class.
2. Static Function Definition:
	- Defines a static function func that prints a message and the value of a.
3. Static Variable Initialization:
	- Initializes the static variable val to 28. This is done outside the class and before the main() function.
4. Main Function:
	- Creates an object b of the Base class.
	- Calls the static function func using the class name Base::func(8).
	- Prints the value of the static variable val using the object b.


Key Points

- Delete is used to release a unit of memory, delete[] is used to release an array.
- Virtual inheritance facilitates you to create only one copy of each object even if the object appears more than one in the hierarchy.
- Function overloading is defined as we can have more than one version of the same function. The versions of a function will have different signatures meaning that they have a different set of parameters.
- Operator overloading is defined as the standard operator can be redefined so that it has a different meaning when applied to the instances of a class.
- Overloading is static Binding, whereas Overriding is dynamic Binding. Overloading is nothing but the same method with different arguments, and it may or may not return the same value in the same class itself.
- Overriding is the same method name with the same arguments and return types associated with the class and its child class.
- There is a thing called virtual pointer which is created at the time of creation of virtual functions which points to the virtual tables ( tables which store methods and functions of a class ). Every class has one virtual table only.
- This pointer tells the objects which method needs to be called at the time of runtime polymorphism. ( also called late binding ).
- Virtual Tables are static arrays which are created when any virtual function is instantiated in a class.
