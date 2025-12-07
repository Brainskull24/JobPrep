# Day 2

## How Java passes variables to methods (Pass by Value) ?

- Java employs a "pass-by-value" mechanism for all method arguments.
- It means that when a variable is passed to a method, a copy of its value is created and used within that method. 
- This applies to both primitive types and object references.

### 1. Java is ALWAYS pass-by-value
- What changes is what the value represents:
  - Primitives → actual value (like 5, 10)
  - Objects → reference value (pointer/address)

### 2. Primitives
- Stored directly in stack memory.
- When passed to a method:
  - A copy of the primitive value is placed in the callee’s stack frame.
  - Changes to the parameter do NOT affect the original variable.

### 3. Object References

- Reference variable → stored on stack.
- Actual object → stored in heap.
- When passing an object:
  - A copy of the reference (pointer) is passed.
  - Both the original reference and the copied reference point to the same heap object.

### 4. Effects inside method

- Mutating the object via copied reference → visible to caller (same object).
- Reassigning the reference inside the method → NOT visible to caller
(you’re only changing the local copy of the reference).

### 5. Net takeaway

- Primitives → independent copies
- Objects → copies of references (shared heap object)
- Java NEVER passes the original reference variable itself → hence not pass-by-reference

**Notes:** 

- Java is not pass-by-reference because methods receive copies of the caller’s values (including object references), not the original variables themselves. Reassigning a parameter inside the method cannot change the caller’s reference.
- Java avoids pass-by-reference because it would break the language’s simplicity, safety, memory isolation, and optimization guarantees. Pass-by-value keeps the model predictable and secure.


## Spring Bean Lifecycle

### 1. Instantiation
- Spring creates the bean object using the constructor.
- No dependencies injected yet — just new Bean() internally.

### 2. Dependency Injection (Populate Properties)

- Spring now injects:
  - Constructor args
  - Setter injections
  - Field injections (@Autowired)
  - Any configuration values (@Value, etc.)

### 3. BeanNameAware / ApplicationContextAware

- If the bean implements any Aware interfaces, Spring calls those methods here.
- Examples:
  - setBeanName
  - setBeanFactory
  - setApplicationContext

### 4. BeanPostProcessor — before initialization

- Spring calls postProcessBeforeInitialization for every registered BeanPostProcessor.
- Common use?
  - @Autowired field resolution
  - Proxy creation
  - Framework magic (e.g., @PostConstruct handling)

### 5. @PostConstruct Method

- If the bean has a method annotated with @PostConstruct, Spring calls it now.
- 👉 Purpose: “Run any logic after dependencies are injected.”
- Example uses:
  - Open DB connections
  - Validate configuration
  - Initialize internal caches

### 6. InitializingBean — afterPropertiesSet()

- If the bean implements InitializingBean, Spring calls: afterPropertiesSet()

### 7. Custom Init Method (from @Bean(initMethod=...) or XML)

- If you specified:
  - @Bean(initMethod = "init")
  - or XML <>bean init-method="init">
- Spring calls it here.


### 8. BeanPostProcessor — after initialization
- Spring calls postProcessAfterInitialization.
- 👉 Important point: This is where AOP proxies are created.
- Example:
  - @Transactional
  - @Async
  - @Cacheable
- They work ONLY because BPP wraps beans with proxies here.


### 🔥 DESTRUCTION PHASE

### 9. @PreDestroy

- Spring calls method annotated with @PreDestroy.
- Used for:
  - Closing streams
  - Flushing buffers
  - Releasing any expensive resources

### 10. DisposableBean — destroy()

- If bean implements DisposableBean, Spring calls: destroy()

### 11. Custom Destroy Method

- If defined with:
- @Bean(destroyMethod = "cleanup") Spring calls it last.