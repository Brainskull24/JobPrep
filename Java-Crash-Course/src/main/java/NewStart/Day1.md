# Day 1
## Memory (Stack vs Heap)

### Stack Memory

- Used for static memory allocation and execution of a thread.
- Used for method calls, local variables and References.
- Memory automatically allocated at the method start and cleared when it ends.
- It grows and shrinks as new methods come and go.
- If the memory becomes full, it throws StackOverFlowError.
- Memory Access is faster and its thread safe.

``` 
class Geeks {
    public static int add(int a, int b) {
        int res = a + b;  // local variable in stack
        return res;
    }

    public static void main(String[] args) {
        int a = 10;   // stored in stack
        int b = 20;   // stored in stack
        int sum = add(a, b);
        System.out.println("The sum is: " + sum);
    }
} 
```

### Heap Memory

- Used for objects, instance variables created using new.
- GC manages it by removing unused objects.
- If it gets full it throws OutOfMemoryError.
- Memory Access is slower and its not thread safe.

``` 
Scanner sc = new Scanner(System.in);
```

- Here, the Scanner object is in the heap, while the reference sc is in the stack.

**Note:** Garbage collection in the heap ensures automatic memory management.

### How Objects are Stored ?

- Primarily stored in Heap Memory inside JVM.
- Objects stored in the heap are managed by the JVM's Garbage Collector. When an object is no longer referenced by any active part of the program, it becomes eligible for garbage collection. 
- The Garbage Collector automatically reclaims the memory occupied by these unreferenced objects, preventing memory leaks and managing memory efficiently.

## SpringBoot Application Startup

- Involves a series of steps caused by SpringApplication.run() method.
- SpringBoot prepares the environment by loading configs.
- SpringBoot identifies the application type and create a appropriate ConfigurableApplicationContext (the Spring IoC container).
- Then comes Auto Configuration - Spring Boot automatically configures beans and settings based on dependencies.
- SpringBoot scans for annotations like @Configuration, @Component, @Service, @Repository, etc., and registers their bean definitions with the ApplicationContext.
- **Bean Instantiation and Dependency Injection:** The ApplicationContext instantiates the registered beans and injects their dependencies, wiring up the application components.
- Application Context Refresh: The application context is refreshed, which involves further processing of beans and configurations.

Note: ```@SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan```

### How SpringBoot identifies the type of Application Context

- Spring-boot uses the deduceFromClasspath() method to determine the type of web application based on the presence of certain dependencies on the classpath. 
- If it finds the spring-boot-starter-web dependency, it will assume that the application is a Servlet-based web application and set the webApplicationType attribute to SERVLET. 
- Similarly, if it finds the spring-boot-starter-reactive dependency, it will assume that the application is a reactive web application and set the webApplicationType to REACTIVE. 
- If none of these dependencies are found, they webApplicationType will be set to NONE.