# JavaScript Interview Questions
<a id="table-of-contents"></a>

| No. | Questions |
| --- | --------- |
| 1 | [What is JavaScript?](#what-is-javascript) |
| 2 | [What Makes JavaScript Great?](#what-makes-javascript-great) |
| 3 | [What Are JavaScript’s Weaknesses?](#what-are-javascripts-weaknesses) |
| 4 | [What is a Thread of Execution?](#what-is-a-thread-of-execution) |
| 5 | [What is a Call Stack?](#what-is-a-call-stack) |
| 6 | [What is Execution Context?](#what-is-execution-context) |
| 7 | [What is Global/Base Execution Context (GEC)?](#what-is-globalbase-execution-context-gec) |
| 8 | [What is Function Execution Context (FEC)?](#what-is-function-execution-context-fec) |
| 9 | [What is Eval Execution Context (EEC)?](#what-is-eval-execution-context-eec) |
| 10 | [What is Scope, Scope Chain, Lexical Scope, and Lexical Environment?](#what-is-scope-scope-chain-lexical-scope-and-lexical-environment) |
| 11 | [What is Closures?](#what-is-closures) |
| 12 | [What is IIFE (Immediately Invoked Function Expression)](#what-is-iife-immediately-invoked-function-expression) |
| 13 | [What is Hoisting?](#what-is-hoisting) |
| 14 | [Hoisting with `var`, `let`, and `const`](#hoisting-with-var-let-and-const) |
| 15 | [What is Temporal Dead Zone (TDZ)](#what-is-temporal-dead-zone-tdz) |
| 16 | [Difference between `var`, `let`, and `const`](#difference-between-var-let-and-const) |
| 17 | [Difference between `==` and `===`](#difference-between-==--and-===) |
| 18 | [Difference b/w null & undefined](#difference-bw-null--undefined) |
| 19 | [Difference between Mutable and Immutable](#difference-between-mutable-and-immutable) |
| 20 | [Difference Between Synchronous and Asynchronous Programming](#difference-between-synchronous-and-asynchronous-programming) |
| 21 | [Difference b/w Blocking and Non-blocking Operations](#difference-bw-blocking-and-non-blocking-operations) |
| 22 | [Call Stack, Web APIs, Event Loop, and Queues](#call-stack-web-apis-event-loop-and-queues) |
| 23 | [What is Starvation and When Does It Occur?](#what-is-starvation-and-when-does-it-occur) |
| 24 | [What are arrow functions vs normal functions](#what-are-arrow-functions-vs-normal-functions) |
| 25 | [This keyword](#this-keyword) |
| 26 | [Rest vs Spread Operator](#rest-vs-spread-operator) |
| 27 | [Deep copy vs shallow copy](#deep-copy-vs-shallow-copy) |
| 28 | [forEach, Map, Filter, Reduce Methods](#foreach-map-filter-reduce-methods) |
| 29 | [Objects (call, bind, apply) Methods](#objects-call-bind-apply-methods) |
| 30 | [What is API](#what-is-api) |
| 31 | [What are the types of API?](#what-are-the-types-of-api) |
| 32 | [What is REST (Representational State Transfer) / RESTful API?](#what-is-rest-representational-state-transfer-restful-api) |
| 33 | [What are the types of API requests (Methods)](#what-are-the-types-of-api-requests-methods) |
| 34 | [Callback vs Promises vs Async/Await](#callback-vs-promises-vs-asyncawait) |
| 35 | [Function Expression and Anonymous Function](#function-expression-and-anonymous-function) |
| 36 | [First Class Function](#first-class-function) |
| 37 | [Params vs Arguments](#params-vs-arguments) |
| 38 | [What is NaN](#what-is-nan) |
| 39 | [Is JavaScript a Compiled or Interpreted Language](#is-javascript-a-compiled-or-interpreted-language) |
| 40 | [Delete Operator](#delete-operator) |
| 41 | [Memory Management in JS (Heap vs Stack)](#memory-management-in-js-heap-vs-stack) |

---

1. ### What is JavaScript?
JavaScript is a **high-level**, **interpreted**, **single-threaded** programming language widely used for creating dynamic web content. It supports **asynchronous programming** through features like **Web APIs**, **Promises**, and **async/await**.

**[⬆ Back to Top](#table-of-contents)**

---
 
2. ### What Makes JavaScript Great?

- **Simplicity**:  
  Easy to learn, debug, and execute directly in the browser without additional tools.  
- **Versatility**:  
  Can be used for frontend (browser), backend (Node.js), and even mobile app development.  
- **OOP and Functional Programming**:  
  Supports object-oriented paradigms like classes and inheritance, as well as functional programming with first-class functions.  
- **Asynchronous Programming**:  
  Handles time-consuming tasks like API calls through **callbacks**, **Promises**, and **async/await**.  
- **Popularity**:  
  Has a large developer community, extensive libraries, and frameworks (e.g., React, Angular, Vue).  

**[⬆ Back to Top](#table-of-contents)**

---

3. ### What Are JavaScript’s Weaknesses?

- **Browser Compatibility**:  
 Variations in browser implementations can lead to compatibility issues. Testing scripts across popular and older browsers is necessary for a consistent user experience.  

- **Callback Hell**:  
 Before modern `async/await`, nested callbacks created complex, hard-to-maintain code structures.  

- **Security Risks**:  
 JavaScript’s client-side nature makes it vulnerable to exploits like cross-site scripting (XSS) attacks.  

**[⬆ Back to Top](#table-of-contents)**

---

4. ### What is a Thread of Execution?

A **thread** is a single, sequential flow of control in a program, often referred to as a process.  
In JavaScript, everything executes line by line within a single thread.  

- A thread consists of:
 - **Call Stack**: Tracks the execution of functions.
 - **Memory Heap**: Stores variables and data.  

![image](https://github.com/user-attachments/assets/3f01c4f2-13e4-47e4-bacb-bb5f6dea97e7)

**[⬆ Back to Top](#table-of-contents)**

---

5. ### What is a Call Stack?

The **call stack** is used by JavaScript to manage function execution in a **LIFO** (Last In, First Out) manner.  
It tracks function execution and manages the **execution context**.

- The **bottom** of the call stack is the **global execution context**.
- Functions are executed one by one and removed as they complete.
- The last function added is the first one to finish and be removed.
- Any code to be executed must first go into the stack.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
 <img src="https://github.com/user-attachments/assets/c6f4f9e1-2d30-4ce2-9599-e9165883e17d" alt="Call Stack Example 1" style="width: 32%; min-width: 100px;">
 <img src="https://github.com/user-attachments/assets/a6bf1e8d-ef52-43bf-aacd-589bcf98b7fd" alt="Call Stack Example 2" style="width: 32%; min-width: 100px;">
 <img src="https://github.com/user-attachments/assets/b29c901a-93f0-4dfa-8beb-674072249203" alt="Call Stack Example 3" style="width: 32%; min-width: 100px;">
</div>

**[⬆ Back to Top](#table-of-contents)**

---
6. ### What is Execution Context?

Execution context is like a **workspace** where JavaScript runs your code. It’s a special environment created whenever your code runs. 

- This environment handles the transformation and execution of your code. 
- It contains the currently running code and everything needed to make it work.

**In short, everything happens inside the execution context.**

**Components of Execution Context:**
1. **Memory Component (Variable Environment):**  
  - Contains the scope chain, variable environment, and `this` keyword binding.  
  - Stores variables and function references in memory.
2. **Code (Execution Component):**  
  - A thread of execution where each line of code is run sequentially.

![Execution Context Diagram 1](https://github.com/user-attachments/assets/31c381a4-eccc-4462-85b9-dd0b92cb0342)  
![Execution Context Diagram 2](https://github.com/user-attachments/assets/4d43d066-22b4-4730-aafc-3240050b05ba)  

**Types of Execution Context:**
1. **Global/Base Execution Context (GEC):**  
  - Created when the script starts running.
2. **Function Execution Context (FEC):**  
  - Created each time a function is invoked.
3. **Eval Execution Context (EEC):**  
  - Created during the execution of the `eval()` function.

**[⬆ Back to Top](#table-of-contents)**

---

7. ### What is Global/Base Execution Context (GEC)?

The **Global Execution Context (GEC)** is the default execution context created when JavaScript starts running. It provides an environment for global variables and functions.  

- Stores variables and functions as **key:value pairs** in memory.  
- Created automatically when the code begins execution.  
- Represents the **global scope**.  
- Creates the **global object**:
  - `window` in browsers.  
  - `global` in Node.js.  
- Sets `this` to the global object.  

1. **Memory Creation Phase**:
   - Allocates memory for variables (set to `undefined`) and functions (stores their entire definition).  
2. **Execution Phase**:
   - Assigns values to variables and executes the code line by line.

What is the Global Object?

The **global object** is an object that stores the values of all global variables in a JavaScript environment.

- In **browsers**, the global object is called `window`.
- In **Node.js**, it is called `global`.

```javascript
var a = 10; // 'a' is a global variable.

console.log(a);         // Output: 10
console.log(window.a);  // Output: 10 (in browsers)
console.log(global.a);  // Output: 10 (in Node.js)
```

[⬆ Back to Top](#table-of-contents)

---

8. ### What is Function Execution Context (FEC)?

The **Function Execution Context (FEC)** is created every time a function is invoked in JavaScript. Each time a function is called, a new execution context is created to execute that function's code.

- The context is destroyed after the function returns a result.
- The result is passed back to the **global execution context**.
- The value of `this` inside the function depends on how the function is called.

```javascript
let a = 10; // 'a' is a global variable stored in the global execution context.
let b = 20; // 'b' is a global variable stored in the global execution context.

function add(a, b) {
    return a + b; // Returns to the global execution context.
}

let result = add(a, b); // Executes within the function context.
console.log(result); // Output: 30
```

[⬆ Back to Top](#table-of-contents)

---

9. ### What is Eval Execution Context (EEC)?

The **Eval Execution Context (EEC)** is created whenever code is executed inside the `eval()` function in JavaScript.

- Executes code contained within a string.
- Has its own **variable environment**.
- Rarely used due to security and performance concerns.

```javascript
eval('var a = 10;'); // Creates a new Eval Execution Context.
console.log(a); // Output: 10 (variable 'a' is accessible in the global scope)
```

---

10. ### What is Scope, Scope Chain, Lexical Scope, and Lexical Environment?

**Scope** refers to the region in which a variable can be accessed. It determines the **visibility** and **lifetime** of variables.

JavaScript variables have 3 types of scope:
1. **Block Scope** - Variables are only accessible within the block where they are defined (e.g., inside `{}`).
2. **Function Scope** - Variables are accessible only within the function in which they are declared.
3. **Global Scope** - Variables declared outside any function or block are globally accessible.

1. Scope Chain
The **scope chain** is the order in which JavaScript looks for variables. It is created when functions are nested within other functions. Each function has access to its own variables, as well as the variables from its parent functions. This forms a chain of scopes, allowing inner functions to access variables from outer functions.

When JavaScript wants to read or write a variable, it starts from the current scope and recursively checks the parent scopes until it finds the variable. If the variable is not found, it throws a `ReferenceError`.

`Scope Chain Order:`
- innerFunction scope
- outerFunction scope
- Global scope

```javascript
function outerFunction() {
    let outerVariable = "I am from outer scope";
    function innerFunction() {
        let innerVariable = "I am from inner scope";
        console.log(outerVariable); // Can access outer scope variable
    }
    innerFunction();
}
outerFunction();
```

2. Lexical Scoping
**Lexical scoping** means that a function’s scope is determined by where it is defined in the code, not where it is called. JavaScript uses lexical scoping to resolve variable names when a function is created inside another function. It determines the function's parent scope based on where the function was created.

In simpler terms, a function will have access to variables from the scope where it was defined, even if it is invoked elsewhere.

```javascript
let globalVariable = "Global";
function outerFunction() {
    let outerVariable = "Outer";
    function innerFunction() {
        console.log(globalVariable); // Accessing global variable
        console.log(outerVariable);  // Accessing outer function's variable
    }
    innerFunction();
}
outerFunction();
```

3. Lexical Environment
A **lexical environment** is an internal structure used by JavaScript to track variables and functions in a particular scope. Each lexical environment consists of two main components:

1. **Environment Record**: Stores the variables and functions of that scope.
2. **Reference to Parent Lexical Environment**: Maintains the scope chain to access parent environments.

```javascript
function a() {
    let x = 10; // 'x' is stored in the environment record of 'a'
    function b() {
        let y = 20; // 'y' is stored in the environment record of 'b'
        console.log(x); // Accesses 'x' from the parent lexical environment (function 'a')
    }
    b();
}
a();
```

| **Scope Chain** | JavaScript searches for a variable starting from the current scope and going up through parent scopes. |
| **Lexical Scoping** | A function can access variables from the scope where it was defined, not where it is called. |
| **Lexical Environment** | The structure that keeps track of variables and references to parent lexical environments. |

**[⬆ Back to Top](#table-of-contents)**

---

11. ### What is Closures?

A **closure** is a function that retains access to its outer function's variables even after the outer function has finished execution. It combines the function with the lexical environment (the outer function's scope).

1. **Retains Access to Outer Scope**: Closures allow inner functions to access the outer function's variables after the outer function has executed.
2. **Lexical Environment**: A closure is created when a function is bundled with its lexical environment, where it was declared.

```javascript
// Simple Closure
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

##### Advantages of Closures:

1. **Data Privacy**  
   Closures allow private variables, making them secure and hidden from the global scope.
   ```javascript
   function private() {
     let count = 0;
     function incrementCount() {
         return count++;
     }
     function getCount() {
         return count;
     }
     return { incrementCount, getCount };
   }

   let cou = private();
   console.log(cou.getCount());  // 0
   cou.incrementCount(); // Increases count
   console.log(cou.incrementCount()); // 1
    ```

2. **Maintain State**
  Functions can remember their outer scope, allowing state to persist.
  ```javascript
  function call() {
    let time = 1;
    function timmer() {
        return time++;
    }
    return timmer;
  }
  
  let timer = call();
  console.log(timer()); // 1
  console.log(timer()); // 2
  ```

3. Factorize Functions
Closures help create functions that remember and use values across calls.
```javascript
function multiplier(factor) {
  return function(num) {
      return factor * num;
  };
}

let double = multiplier(2);
console.log(double(10)); // 20
```

##### Disadvantages of Closures:

1. **Memory Consumption**  
   Closures can use more memory since they store outer function variables.

2. **Performance Issues**  
   Excessive use of closures may reduce performance due to increased memory usage.

3. **Debugging Challenges**  
   Closures can complicate debugging due to complex scope chains.

**[⬆ Back to Top](#table-of-contents)**

---

12. ### What is IIFE (Immediately Invoked Function Expression)?

An **IIFE** (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it is defined.

```javascript
(function() {
})();
```

##### Types of IIFE

1. Anonymous Function IIFE
An anonymous function IIFE does not have a name and runs immediately after definition:

```javascript
(function() {
    console.log("Hello, I am an Anonymous function IIFE!");
})();
```
```
(() => console.log("Hello, I am an Anonymous function IIFE!"))(); // Alternatively, using an arrow function
```

2. Named Function IIFE
A named function IIFE includes a function name and can still be invoked immediately:

```javascript
(function welcome() {
    console.log("Hello, I am a Named function IIFE!");
})();
```
```javascript
(function add(a, b) {
    console.log(a + b); // Passing parameters to a named function IIFE
})(2, 3);
```

##### Benefits of Using IIFE

1. Data Privacy
IIFE helps ensure data privacy by making variables declared inside the IIFE inaccessible from the outside world. This avoids polluting the global scope.

```javascript
(function () {
  var message = "IIFE";
  console.log(message);
})();
console.log(message); // Error: message is not defined
```

2. Return Value from IIFE
IIFE can be used to immediately return values from a function.

```javascript
var value = (() => 100)();
console.log(value); // Output: 100
```

3. Asynchronous IIFE
IIFE allows you to execute `async/await` operations immediately.

```javascript
const data = (async () => await fetch(url))();
```

- How to Invoke an IIFE Without Extra Brackets?
Immediately Invoked Function Expressions (IIFE) usually require parentheses to wrap the function. However, you can avoid using extra parentheses by utilizing the `void` operator, which discards the result of the expression.

```javascript
// Using void to Avoid Extra Parentheses
void function (dt) {
  console.log(dt.toLocaleTimeString());
}(new Date());
```

**[⬆ Back to Top](#table-of-contents)**

---

13. ### What is Hoisting?

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the creation phase, allowing them to be accessed before being defined in the code.

- **Hoisting** moves variable and function declarations to the top, not their initializations.
- **Global & Local**: Hoisting occurs in both global and function/block scopes.

```javascript
fun();
function fun() {
  console.log("Hi"); // fun() can be called before its definition due to hoisting.
}
```

**[⬆ Back to Top](#table-of-contents)**

---

14. ### Hoisting with `var`, `let`, and `const`

- **`var`** is hoisted and initialized with `undefined` during the creation phase.
- **`let`** and **`const`** are hoisted but are not initialized until their respective declarations are encountered in the code. This causes a "Temporal Dead Zone" (TDZ), where accessing them before initialization results in a `ReferenceError`.

```javascript
console.log(x); // Output: undefined (x is hoisted but not initialized)
var x = 10;
console.log(x); // Output: 10
```
```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
```

![image](https://github.com/user-attachments/assets/e354fd45-0a09-4ee4-a8cd-3f4d12e10264)

**[⬆ Back to Top](#table-of-contents)**

---

15. ### What is Temporal Dead Zone (TDZ)

The Temporal Dead Zone (TDZ) refers to the period between the creation of a variable with `let` or `const` and its declaration in the code. During this period, the variable exists (hoisted) but cannot be accessed, resulting in a `ReferenceError`.

```javascript
x = 30;
console.log(x);
let x = 10;
```

**[⬆ Back to Top](#table-of-contents)**

---

16. ### Difference between `var`, `let`, and `const`

1. Var
- **Hoisted**: `var` can be hoisted to the top of its scope.
- **Scope**: It is function-scoped, meaning it’s only available within the function it’s defined in, not within block-level scopes (like in an `if` or `for` block).
- **Redeclaration**: You can redeclare a variable using `var` multiple times in the same scope.
- **Reassignment**: You can change the value of a `var` variable at any time.

**Note**: Avoid using `var` in modern JavaScript. Its function-scoping can lead to unexpected behavior.

---

2. Let
- **Hoisted**: `let` can be hoisted, but it can’t be accessed until its declaration due to the Temporal Dead Zone (TDZ).
- **Scope**: It is block-scoped, meaning it’s only available within the block it’s defined in (like inside an `if` or `for` loop).
- **Redeclaration**: You cannot redeclare a `let` variable within the same scope.
- **Reassignment**: You can change the value of a `let` variable.

**Note**: `let` is a good choice for variables whose values you plan to change.

---

3. Const
- **Hoisted**: `const` is hoisted but can’t be accessed due to the Temporal Dead Zone (TDZ).
- **Scope**: It is also block-scoped like `let`.
- **Redeclaration**: You cannot redeclare a `const` variable within the same scope.
- **Reassignment**: You cannot change the value of a `const` variable once it’s been assigned. It’s constant.

**Note**: Use `const` for values that should never change.  
**Pro Tip**: Use `const` by default unless you know the variable’s value will change, in which case, use `let`.

**[⬆ Back to Top](#table-of-contents)**

---

17. ### Difference between `==` and `===`

`==` and `===` are both comparison operators used to compare values, but they work differently:

1. `==` (Loose Equality Operator)
- **Type Coercion**: `==` checks for value equality but ignores the type of the operands. It attempts to convert (or "coerce") the values to be of the same type before comparing.
  
```javascript
5 == '5'; // true, because '5' (string) is converted to 5 (number) before comparing
true == 1; // true, because `true` is converted to 1 before comparing
null == undefined; // true, because `null` and `undefined` are loosely equal
```

**Note**: `==` can lead to unexpected results because it converts values to the same type before comparing.

2. `===` (Strict Equality Operator)
- **No Type Coercion**: `===` checks for both **value** and **type** equality. It will only return `true` if both the **value** and **type** of the operands are exactly the same. No type conversion occurs.

```javascript
5 === '5'; // false, because one is a number and the other is a string
true === 1; // false, because `true` is a boolean, not a number
null === undefined; // false, because they are different types
```

**Note**: `===` is more predictable because it requires both the **value** and the **type** to be the same.

**[⬆ Back to Top](#table-of-contents)**

---

18. ### Difference b/w null & undefined

Both `null` and `undefined` represent "empty" or "missing" values, but they have different meanings and are used in different situations.

1. Undefined
- `undefined` means a variable has been declared but has not been assigned a value yet.
- JavaScript itself automatically assigns `undefined` to variables that are declared but not assigned any value.

2. Null
- `null` is an intentional absence of any value. It means "nothing" or "empty."
- You (the programmer) can assign `null` to a variable to indicate that it’s empty or has no value.

```javascript
let a;
let b = null;
console.log(a); // Output: undefined, because we didn’t give `a` a value
console.log(b); // Output: null, because we set `b` to null intentionally

console.log(a === b); // Output: false, because `undefined` is not the same as `null`
console.log(a == b);  // Output: true, because loosely, `undefined` and `null` are treated as equal
```

**[⬆ Back to Top](#table-of-contents)**

---

19. ### Difference between Mutable and Immutable

1. Mutable
**Mutable** means data can be changed after creation. Objects, arrays, and functions are mutable by default.

- **Objects** are mutable by reference (memory address). We can also work with them immutably.
```javascript
const person = {
   name: "P",
   age: 18
};
person = {...person, age: 20};  // Creates a new object, modifies the age, but the original object is unchanged
console.log(person);
```
```javascript
const person = {
  firstName: "A",
  lastName: "B",
  age: 50,
  eyeColor: "blue"
}
const x = person;
x.age = 10; // The object `x` is not a copy, it's the same reference as `person`. Any changes to `x` will also change `person`.
```
```javascript
const user = {
    name: 'Ahad Ali',
    age: 20
};
user.name = 'Abdul Ahad'; 
console.log(user);  // Modifying properties is allowed even with 'const'. 'const' only prevents reassignment of the reference, not the mutation of the object.
```

- **Arrays** are mutable, but some methods return new arrays instead of modifying the original.

**Mutable methods** like `push`, `sort`, and `splice` directly modify the original array.
```javascript
let mutableArray = [1, 2, 3];
mutableArray.push(4);  // This will modify the array directly
console.log(mutableArray);  // Output: [1, 2, 3, 4]
```

**Immutable methods** like `map`, `filter`, and `slice` create a new array, leaving the original unchanged.
```javascript
let originalArray = [1, 2, 3, 4, 5];
let newArray = originalArray.map(item => item * 2); // // map method creates a new array without modifying the original array
console.log(originalArray);  // Output: [1, 2, 3, 4, 5]
console.log(newArray);       // Output: [2, 4, 6, 8, 10]

let filteredArray = originalArray.filter(item => item > 2); // // filter method creates a new array without modifying the original array
console.log(filteredArray);  // Output: [3, 4, 5]

let slicedArray = originalArray.slice(1, 4); // // slice method creates a shallow copy of the original array
console.log(slicedArray);    // Output: [2, 3, 4]
```

2. Immutable
**Immutability** means once data is created, it cannot be changed. Instead of modifying it, a new one is created.

- **Primitive types** (numbers, strings, booleans) are immutable.
- **Strings** are immutable. Any operation on a string creates a new one, leaving the original unchanged.


```javascript
let immutable = "Hello";
immutable[1] = "a";  // This will not work, because strings are immutable
immutable = immutable + " World";  // This creates a new string, not modifying the original
console.log(immutable);  // Output: "Hello World"
```
```javascript
// Immutable Values (Numbers and Strings)
let myNum = 27;
let myString = "hi how are you";
let myNum2 = myNum; 
let myString2 = myString; 
myNum2 = myNum2 - 5; 
myString2 = myString2 += ' doing'; 

console.log(myNum);      // Output: 27 (unchanged)
console.log(myNum2);     // Output: 22 (new value)
console.log(myString);   // Output: "hi how are you" (unchanged)
console.log(myString2);  // Output: "hi how are you doing" (new value)
```

| **Aspect**     | **Mutable**                                                     | **Immutable**                                              |
|----------------|-----------------------------------------------------------------|------------------------------------------------------------|
| **Advantages** | - Easier to modify existing code.                               | - Helps with easy debugging.                               |
|                | - More memory efficient.                                        | - Ensures no state corruption and maintains data integrity.|
| **Disadvantages**| - Can lead to bugs if not used correctly.                      | - More memory intensive due to new copies being created.   |
|                | - Debugging can be difficult due to potential side effects.    | - Can result in worse performance in memory-heavy tasks.   |

**[⬆ Back to Top](#table-of-contents)**

---

20. ### Difference Between Synchronous and Asynchronous Programming

1. Sync or Synchronous
- Code executes sequentially, one step at a time.
- Each operation waits for the previous one to finish before moving forward.
- Suitable for simple tasks where timing isn’t critical.
- Blocks the execution flow until the current task is completed.

- If two people use an ATM, the second person has to wait until the first finishes.
```javascript
console.log('1');
console.log('2');
```

2. Async or Asynchronous Programming
- Executes operations concurrently, without blocking.
- Improves efficiency by allowing tasks to run independently.
- Ideal for time-consuming operations like I/O, network requests, and data fetching.
- Handled using **Promises**, **Callbacks**, or **Async/Await**.

- Multiple people can cook dishes at the same time without waiting for others.
```javascript
console.log('1');
setTimeout(() => {
    console.log('2');
}, 5000);
console.log('3');
```

**[⬆ Back to Top](#table-of-contents)**

---

21. ### Difference b/w Blocking and Non-blocking Operations

1. Blocking
- Refers to code that blocks further execution until the operation completes.
- Example: **Node.js `readFileSync()`**

2. Non-blocking
- Refers to code that does not block further execution.
- Example: **Node.js `readFile()`**
  
![image](https://github.com/user-attachments/assets/b340369b-8873-42f7-936e-74b7cd3d06df)

**[⬆ Back to Top](#table-of-contents)**

---

22. ### Call Stack, Web APIs, Event Loop, and Queues

When we run JavaScript code in a JS engine, the engine uses the **Call Stack** to execute the code. The Call Stack waits for nothing.

1. **Yellow Block (Call Stack)**: Where all code execution happens and it doesn't wait for nothing (asynchronous tasks).
2. **Web APIs**: External features provided by the browser (e.g., timers, fetch) to perform asynchronous tasks. These are not part of JavaScript itself.
3. **Task Queue**: Tracks tasks from Web APIs (e.g., `setTimeout`) in a First-In-First-Out (FIFO) order.
4. **Multitask Queue/Promise Jobs**: High-priority queue used for Promises and `async/await`. Executes before the Task Queue.
5. **Event Loop**: Monitors Task Queue and Multitask Queue, moving tasks to the Call Stack for execution when the stack is empty.

![image](https://github.com/user-attachments/assets/af7d4ce6-7975-4c2a-b5ef-5dcfe0780de8)
![image](https://github.com/user-attachments/assets/6712618a-78ba-4105-a859-529a5146c6e1)

1. Task Queue
- Holds asynchronous tasks from Web APIs.
- Follows FIFO order.
- Used by timers (`setTimeout`, `setInterval`) for execution.

2. Multitask Queue / Promise Jobs
- Similar to Task Queue but with higher priority.
- Used for Promises and `async/await`.
- Executes tasks before the Task Queue.

3. Event Loop
- Moves tasks from the Multitask Queue and Task Queue to the Call Stack when the stack is empty.
- Prioritizes Multitask Queue over Task Queue.
- Ensures smooth handling of asynchronous code.

```javascript
console.log('1');
setTimeout(() => {
  console.log('2');
}, 5000);
console.log('3');
```
```javascript
console.log('Global 1!');
setTimeout(() => {
  console.log('Task Queue!');
}, 0);
Promise.resolve().then(() => {
  console.log("Microtask Queue!");
});
console.log('Global 2!');
```
```javascript
console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
console.log('3');
```
`Why does setting the timer to 0 still log `2` last?`
- Logs `1` to the console.
- Sets a `setTimeout` with 0ms delay, placing the callback in the Web API.
- Logs `3` as the Call Stack processes synchronous code first.
- The timer expires and places the callback (`console.log('2')`) in the Task Queue.
- The Event Loop waits for the Call Stack to be empty before moving the task from the Task Queue.
- Once the stack is empty, the callback (`console.log('2')`) is moved to the Call Stack and logged last.

**[⬆ Back to Top](#table-of-contents)**

---

23. ### What is Starvation and When Does It Occur?

**Starvation** occurs when one type of task continually monopolizes the thread, preventing other tasks from executing. This can happen in JavaScript when tasks in the **Microtask Queue** keep being added at a high rate, leaving no opportunity for tasks in the **Task Queue** to run. Microtasks have higher priority, and rapid addition of microtasks leads to their starvation.

```javascript
console.log('Global 1!');
setTimeout(() => {
  console.log('Task Queue!');
}, 0);
Promise.resolve().then(() => {
  console.log('Microtask Queue!');
  Promise.resolve().then(() => {
    console.log('Microtask Queue!');
    Promise.resolve().then(() => {
      console.log('Microtask Queue!');
      Promise.resolve().then(() => {
        console.log('Microtask Queue!');
      });
    });
  });
});
console.log('Global 2!');
```
- Logs `Global 1!`.
- `setTimeout` moves the callback (`console.log('Task Queue!')`) to the Task Queue with a 0ms delay.
- `Promise.resolve()` adds the `.then()` callback to the Microtask Queue.
- Logs `Global 2!` (synchronous code in the Call Stack is executed first).
- The Event Loop processes the Microtask Queue:
- Logs `Microtask Queue!` four times, as new microtasks are continually added within each `.then()`.
- After all microtasks are completed, the Event Loop processes the Task Queue:
- Logs `Task Queue!`.

**[⬆ Back to Top](#table-of-contents)**

---

24. #### What are arrow functions vs normal functions

1. Syntax 
```javascript
// Normal Function
function add(a, b) {
    return a + b;
}
```

```javascript
// Arrow Function
const add = (a, b) => a + b;

a => {
    return a; // Explicit Return, Multi-Line
};

a => a; // Implicit Return, Single-Line

a => (
    a // Implicit Return, Multi-Line
);

(a, b) => a + b; // Multiple Parameters (Parentheses Required)
```

2. Return Behavior
- **Normal Functions**: Always require the `return` keyword to return a value.
- **Arrow Functions**: Allow implicit returns where the `return` keyword can be omitted for single-line expressions.

```javascript
// Normal Function
function multiply(a, b) {
    return a * b; // Explicit Return
}

// Arrow Function
const multiply = (a, b) => a * b; // Implicit Return
```

3. Arguments Object
- **Normal Functions**: Have access to the `arguments` object, which contains the arguments passed to the function.
- **Arrow Functions**: Do not have their own `arguments` object.

```javascript
// Normal Function
function printArguments() {
    console.log(arguments);
}
printArguments(1, 2, 3); // Output: [1, 2, 3]

// Arrow Function
const printArguments = () => {
    console.log(arguments); 
};
printArguments(1, 2, 3); // Error: 'arguments' is not defined
```

4. `this` Binding
- **Normal Functions**: Create their own `this` context, which depends on how the function is called.
- **Arrow Functions**: Do not create their own `this` context; they inherit `this` from the surrounding scope.

```javascript
// Normal Function
const obj1 = {
    name: 'Normal Function',
    print: function() {
        console.log(this);
    }
};
obj1.print(); // Logs the obj1 object

// Arrow Function
const obj2 = {
    name: 'Arrow Function',
    print: () => {
        console.log(this);
    }
};
obj2.print(); // Logs the global 'window' object (or 'undefined' in strict mode)
```

5. Constructors
- **Normal Functions**: Can be used as constructors with the `new` keyword.
- **Arrow Functions**: Cannot be used as constructors and will throw an error if used with `new`.

```javascript
// Normal Function as Constructor
function Person(name) {
    this.name = name;
}
const person1 = new Person('John'); // Works

// Arrow Function as Constructor
const Person = (name) => {
    this.name = name;
};
const person2 = new Person('John'); // Error: Person is not a constructor
```

6. Hoisting
- **Normal Functions**: Can be declared and are hoisted to the top of their scope.
- **Arrow Functions**: Cannot be accessed before initialization.

```javascript
// Normal Function
console.log(add(2, 3)); // Works
function add(a, b) {
    return a + b;
}

// Arrow Function
console.log(subtract(5, 2)); // Error: Cannot access 'subtract' before initialization
const subtract = (a, b) => a - b;
```

7. Declaration
- **Normal Functions**: Can be declared using the `function` keyword.
- **Arrow Functions**: Must always be assigned to a variable or constant.

```javascript
// Normal Function Declaration
function greet() {
    console.log('Hello!');
}

// Arrow Function Assignment
const greet = () => {
    console.log('Hello!');
};
```

| **Feature**         | **Normal Function**               | **Arrow Function**                 |
|---------------------|-----------------------------------|------------------------------------|
| **Syntax**          | `function add(a, b) { ... }`     | `const add = (a, b) => { ... }`    |
| **Return**          | Explicit Return Required         | Allows Implicit Return             |
| **arguments Object**| Available                        | Not Available                      |
| **this Binding**    | Creates Own `this`               | Inherits `this`                    |
| **Constructor**     | Can Be Used                      | Cannot Be Used                     |
| **Hoisting**        | Fully Hoisted                    | Not Hoisted                        |
| **Declaration**     | Using function keyword           | Must Be Assigned to Variable       |


**[⬆ Back to Top](#table-of-contents)**

---

25. #### This keyword

The `this` keyword refers to the object it belongs to.
Its value changes depending on where and how it is used in JavaScript.

1. In a Method
- When `this` is used in a method, it refers to the object that owns the method.

```javascript
const obj = {
  name: 'deeecode',
  age: 200,
  print: function() {
    console.log(this);
  }
};
obj.print(); // Logs the object: { name: 'deeecode', age: 200, print: [Function: print] }
```

2. Alone
- When `this` is used alone (outside of any method), it refers to the global object.

```javascript
console.log(this); // In a browser, it logs the `window` object.
```

3. In a Function
- In a regular function, `this` refers to the global object (i.e., `window` in browsers) unless the function is in strict mode.

```javascript
function showThis() {
  console.log(this);
}
showThis(); // Logs the global object (window in browsers).
```

4. In an Event
- In an event handler, `this` refers to the element that received the event.

```html
<button id="myButton">Click Me</button>
<script>
document.getElementById('myButton').addEventListener('click', function() {
  console.log(this); // Logs the button element that was clicked.
});
</script>
```

5. Using `call()`, `apply()`, and `bind()`
- Methods like `call()`, `apply()`, and `bind()` allow you to explicitly set the value of `this` inside a function, binding it to any object.

- **`call()`**: Calls a function with a specified `this` value and arguments.
- **`apply()`**: Similar to `call()`, but takes arguments as an array.
- **`bind()`**: Returns a new function, permanently binding `this` to a specified object.

```javascript
const obj = {
  name: 'deeecode',
  age: 200,
  print: function() {
    console.log(this);
  }
};

const obj2 = {
  name: 'decoded',
  age: 300,
};

// Using call() - explicitly sets `this` to obj
obj.print.call(obj); // Logs obj

// Using apply() - explicitly sets `this` to obj2
obj.print.apply(obj2); // Logs obj2

// Using bind() - permanently sets `this` to obj2 and returns a new function
const boundPrint = obj.print.bind(obj2);
boundPrint(); // Logs obj2
```

**[⬆ Back to Top](#table-of-contents)**

---

26. #### Rest vs Spread Operator

Rest Operator (`...`)

The **Rest Operator** is used to collect multiple arguments into a single array or object. It's commonly used in function parameters or object destructuring to gather remaining values.

1. Rest Operator Used in Function Parameter
```javascript
function print(...rest) {
    return rest; // Collects all arguments into an array.
}
console.log(print(1, 2, 3)); // Output: [1, 2, 3]
// Collects all function arguments into the rest array.
```

2. Rest operator used in object destructuring
```javascript
const [...rest] = [1, 2, 3]; // Collects all elements into an array.
console.log(rest); // Output: [1, 2, 3]
// The rest operator collects the entire array into the rest variable.
```

3. Rest Parameter for Operations
```javascript
function sum(...args) {
    return args.reduce((a, b) => a + b); // // Adds all numbers passed to the function
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

Spread Operator (`...`)

The **Spread Operator** is used to expand arrays or objects into individual elements. It helps in combining arrays, copying values, or passing array elements to functions.

1. Spread Operator in Arrays to combine arrays
```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // // Expands arr and adds new elements
console.log(newArr); // Output: [1, 2, 3, 4, 5]
```

2. Spread operator to combine two arrays
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

**Destructuring in JavaScript**
Destructuring is a JavaScript expression that enables you to unpack values from arrays or properties from objects into distinct variables.

```javascript
// Destructuring an Array
const arr = [1, 2, 3];
const [a, b, c] = arr; // Unpacks array into separate variables
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```
```javascript
// Destructuring an Array with Rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
```
```javascript
// Destructuring an Object with Rest
const user = { name: 'John', age: 30, role: 'admin' };
const { name, ...details } = user; // Unpacks the 'name' and collects remaining properties in 'details'
console.log(name);    // Output: 'John'
console.log(details); // Output: { age: 30, role: 'admin' }
```


| **Rest**                               | **Spread**                                      |
|----------------------------------------|-------------------------------------------------|
| Gathers values into one array.        | Breaks values apart into individual elements.   |


**[⬆ Back to Top](#table-of-contents)**

---

27. #### Deep copy vs shallow copy

Shallow Copy

A **shallow copy** copies only the outermost layer of an object or array. If the original object or array contains nested objects or arrays, the shallow copy will still reference them, not duplicate them. This means that changes made to nested objects in the copied object will affect the original object.

```javascript
const original = { name: "Alice", details: { age: 25, city: "New York" } };

// Shallow copy using spread operator
const shallowCopy = { ...original };

shallowCopy.name = "Ahsan";
shallowCopy.details.age = 30;

console.log(original.details.age);  // Output: 30
console.log(shallowCopy.details.age); // Output: 30
```

Deep Copy

A **deep copy** creates a completely new object, including all nested objects or arrays, so changes to the copied object won't affect the original one.

```javascript
const original = { name: "Alice", details: { age: 25, city: "New York" } };

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.name = "Ahsan";
deepCopy.details.age = 30;

console.log(original.details.age);  // Output: 25
console.log(deepCopy.details.age);   // Output: 30
```

| **Shallow Copy**                                                                                                    | **Deep Copy**                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Copies the array or object, but any nested objects or arrays inside the copied structure are still referenced to the original. | Copies the entire structure, including nested objects or arrays, creating independent copies.                        |
| Changes to the nested data will reflect in both the original and the copied structures.                            | Changes to the nested data won't affect the original.                                                                |

**[⬆ Back to Top](#table-of-contents)**

---

28. #### forEach, Map, Filter, Reduce Methods 

1. `forEach()`
The `forEach()` method is used to loop over an array and perform an action on each item. It doesn't return anything; it just performs the given function for each element.

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(num => {
    console.log(num * 2); // Multiplies each number by 2 and prints it
});
```

2. `map()`
The `map()` method creates a new array by applying a function to each element in the original array. It returns a new array without changing the original one.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8]
console.log(numbers);  // Output: [1, 2, 3, 4]
```

3. `filter()`
The `filter()` method creates a new array containing only the elements that pass a test specified by a function. It helps in filtering out certain values.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4, 6]
```

4. `reduce()`
The `reduce()` method is used to reduce an array to a single value by applying a function to each element. You can use it to sum values, concatenate strings, or perform other calculations.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15
```

## Array Methods and Copy Behavior

| **forEach()**                                        | **map()**                                               | **filter()**                                           | **reduce()**                                          |
|------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------|------------------------------------------------------|
| Loops through each element and performs an action. | Creates a new array by transforming each element.     | fCreates a new array containing elements that pass a test. | Reduces an array to a single value.                |
| Modifies the original array if changes are made.   | Does not modify the original array.                   | Does not modify the original array.                 | Can accumulate complex data like objects.          |
| **Shallow Copy**: No new array created. Modifies the original array directly. | **Shallow Copy**: Creates a new array, but nested objects are still references to the original. | **Shallow Copy**: Creates a new array, but nested objects are still references to the original. | **Shallow Copy**: Accumulates values, but nested objects may still be referenced. |



**[⬆ Back to Top](#table-of-contents)**

---

29. #### Objects (call, bind, apply) Methods

1. `call()` Method
The `call()` method is used to invoke a function and explicitly set the `this` context (i.e., the value of `this` inside the function). It immediately invokes the function with the specified `this` value and any arguments provided.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const anotherPerson = {
  firstName: "Jane",
  lastName: "Smith"
};

console.log(person.fullName.call(anotherPerson)); // Output: Jane Smith
```

2. `apply()` Method
The `apply()` method is similar to `call()`, but instead of passing arguments individually, it accepts an array of arguments. This is useful when you don't know how many arguments will be passed.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + " from " + city + ", " + country;
  }
};

const anotherPerson = {
  firstName: "Jane",
  lastName: "Smith"
};

console.log(person.fullName.apply(anotherPerson, ["New York", "USA"])); // Output: Jane Smith from New York, USA
```

3. `bind()` Method
The `bind()` method creates a new function that, when invoked, has its `this` keyword set to a specific value, and it can also prepend any arguments to that function. Unlike `call()` and `apply()`, `bind()` does not invoke the function immediately; it returns a new function that can be invoked later.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + " from " + city + ", " + country;
  }
};
const anotherPerson = {
  firstName: "Jane",
  lastName: "Smith"
};
const boundFunction = person.fullName.bind(anotherPerson, "Paris", "France");
console.log(boundFunction()); // Output: Jane Smith from Paris, France
```

| call                               | apply                                    | bind                                               |
|------------------------------------|------------------------------------------|----------------------------------------------------|
| Runs the function right away with the given arguments. | Runs the function right away but takes arguments as an array. | Creates a new function that runs later with the given `this` value and optional arguments. |

**[⬆ Back to Top](#table-of-contents)**

---

30. ### What is API

An **API** (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other. It acts as a bridge between systems, enabling them to interact via HTTP requests and responses.

An API interaction involves:
1. **Client**: Sends a request.
2. **Server**: Processes the request and sends a response.
3. **API**: Facilitates communication between the client and server.

##### Weather App
- **Client**: Weather app.
- **API**: Weather service API (e.g., AccuWeather).
- **Server**: Weather service backend.
  - Client sends a weather request to the API.
  - API queries the server and sends data back to the client.

##### Ridesharing App
- **Client**: Uber app.
- **API**: Ridesharing service API.
- **Server**: Uber's backend.
  - Client requests nearby drivers through the API.
  - API communicates with the server and responds with driver details.

##### E-commerce Platform
- **Client**: Online store frontend.
- **API**: Payment gateway API (e.g., PayPal, Stripe).
- **Server**: Payment gateway backend.
  - Client sends payment info via API.
  - API processes the payment by communicating with the server.
  - Server returns the transaction result to the client.

Why Are APIs Important?
1. **Reusability**: Developers can leverage existing services, saving time.
2. **Cross-platform Communication**: Enables interaction between applications on different platforms.
3. **Scalability**: Simplifies adding new features and services.

**[⬆ Back to Top](#table-of-contents)**

---

31. ### What are the types of API?

1. **Open/Public APIs**
- APIs that are available for everyone to use.
- Anyone can use them, but some may require signing up.
- Example: OpenWeather (weather data), Google Maps (map services).

2. **Private APIs**
- APIs used only within a company or organization.
- Only employees or internal teams can use them.
- Example: An API to manage employee records, or an API for the company's internal payment system.

3. **Partner APIs**
- APIs shared between businesses or partners.
- Used by business partners to connect their services.
- Example: PayPal (for payments on partner websites), Amazon Seller API (for sellers on Amazon).

4. **Composite APIs**
- Interact with multiple endpoints in a single request.
- Used when data needs to be fetched from different places at once.
- Example: A travel booking API that gives both flight and hotel info, an API that combines social media posts with user data.

5. **Simple APIs**
- Basic APIs for simple tasks.
- Used for common, straightforward actions between systems, not necessarily following strict principles like REST or SOAP.
- Example: File upload APIs, contact form submission APIs.

6. **REST APIs (Representational State Transfer)**
- Popular type of API that uses simple web requests to get or send data using HTTP protocols.
- Lightweight communication, often with JSON or XML.
- Example: Twitter (for retrieving tweets), Google Maps (for location data).

7. **SOAP APIs (Simple Object Access Protocol)**
- Older type of API that uses XML messages.
- Used for more secure or complex tasks in businesses.
- Example: PayPal (for processing payments), FedEx (for shipping details).

| **Type**        | **Access**                        | **Purpose**                                                        | **Examples**             |
| --------------- | --------------------------------- | ------------------------------------------------------------------ | ------------------------ |
| **Open/Public** | Open to everyone                  | General-purpose functionality, may require signing up.           | OpenWeather API, Google Maps API |
| **Private**     | Internal (within an organization) | Used for company-specific tasks.                                  | Internal HR API, Payment API |
| **Partner**     | Shared between businesses         | For businesses to work together and share data.                   | PayPal API, Amazon Seller API |
| **Composite**   | Combines multiple sources         | Fetches data or performs actions from different places at once.   | Travel booking API, Social Media API |
| **REST**        | Open, easy to use                 | Simple, lightweight communication.                                | Twitter API, Google Maps API |
| **SOAP**        | More complex and secure           | Used for secure and detailed business processes.                  | PayPal API, FedEx API    |

**[⬆ Back to Top](#table-of-contents)**

---

32. #### What is REST (Representational State Transfer) / RESTful API?

REST is a set of architectural rules for building web services that interact using the **HTTP protocol**. RESTful APIs enable clients (e.g., web browsers, mobile apps) to communicate with servers to perform **CRUD operations**:

- **Create**: POST
- **Read**: GET
- **Update**: PUT/PATCH
- **Delete**: DELETE

`How are REST APIs Stateless?`

In a **stateless REST API**, the server does **not** retain any information about the client between requests. Each request is **independent** and must include all the necessary information, such as an **API key** or **authentication token**.  
This differs from **stateful applications**, where the server keeps track of client sessions.

`Stateful Applications vs Stateless Applications?`

| **Stateful Applications**                                                                                      | **Stateless REST APIs**                                                                                           |
|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| The server remembers information about the client between different requests.                                    | The server does **not** remember anything about the client after each request.                                      |
| When you log into a website, the server remembers your session so that you don't have to log in again on every page. | Each request must include all information (e.g., API key) for the server to process it.                             |
| The server maintains state across requests.                                                                     | The server processes each request independently without storing client data between requests.                       |
| Client does not need to resend authentication details for every request (session-based).                        | Client must resend all necessary data (e.g., API key, token) with each request.                                    |
| The server remembers your login session and you don't need to log in again for subsequent requests.             | You send a request to fetch your user details, including the API key or token for authentication, each time.         |
| The server retains client information between requests, making it **stateful**.                                  | The server does not retain any client information between requests, ensuring it is **stateless**.                   |
| Sessions or cookies are typically used to maintain the state.                                                   | Each request must include credentials or tokens to authenticate the client.                                        |

`1. Stateful Example (Non-RESTful):`
In a stateful application, the server stores session data between requests.

```javascript
// Server stores session data (Not RESTful)
const express = require('express');
const app = express();
const session = {};

app.post("/login", (req, res) => {
  session.user = { id: 1, name: "John" }; // Server remembers user
  res.send("Logged in");
});

app.get("/profile", (req, res) => {
  if (session.user) {
    res.json(session.user); // Server uses stored session
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```


`2. Stateless Example (RESTful):`
In a stateless API, each request must include all necessary information for authentication.

```javascript
// Client Request (Stateless)
fetch("https://api.example.com/user", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY", // Token included for authentication
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// Server Handling Request (Stateless)
const express = require('express');
const app = express();

app.get("/user", (req, res) => {
  const apiKey = req.headers['authorization'];
  if (apiKey === "Bearer YOUR_API_KEY") {
    res.json({ id: 1, name: "John" }); // Returns data without maintaining state
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

   

--- 

33. ### **What are the types of API requests (Methods)?**

1. GET Method

- Retrieves data from the server without modifying it.
- **When to Use**:
  - Use GET to fetch data without causing any changes.
  - It is **idempotent**, meaning multiple requests return the same result without side effects.

```http
GET /api/users
```
```http
// Response we will get:
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

2. POST Method

- Sends data to the server to create a new resource.
- **When to Use**:
  - Use POST to submit data for creating a new resource.
  - It is **not idempotent**, meaning multiple requests can create multiple resources.

```http
POST /api/users
```
```json
// Requested data we will send:
{
  "name": "John",
  "email": "john@example.com"
}
```

3. PUT Method

- Updates an entire resource at a specific URL.
- **When to Use**:
  - Use PUT to completely replace a resource with new data.
  - Can be thought of as **"update and replace"**.
  - **Idempotent**: Multiple requests result in the same resource state.

```http
PUT /api/users/1
```
```json
// Requested data we will send:
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```
```json
// Response data we will get:
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

4. PATCH Method
   
- Partially updates a resource by modifying specific fields.
- **When to Use**:
  - Use PATCH to update only the required fields, not the entire resource.
  - **"Update and merge"**: Only specified fields are updated.

```http
PATCH /api/users/1
```
```json
// Requested data we will send:
{
  "email": "john.doe@newdomain.com"
}
```
```json
// Response data we will get:
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@newdomain.com"
}
```

5. DELETE Method
   
- Permanently removes a resource from the server.
- **When to Use**:
  - Use DELETE to remove a resource.
  - **Idempotent**: Calling DELETE multiple times will result in the same response.
    
```http
DELETE /api/users/1
```
```json
// Response data we will get:
{
  "message": "Resource successfully deleted."
}
```

6. OPTIONS Method

- Retrieves the HTTP methods supported by a resource.
- **When to Use**:
  - Use OPTIONS to discover allowed actions on a resource.
  - Commonly used for **CORS** and policy checks.
  - Returns metadata without making any changes.

```http
OPTIONS /api/users
```
```json
// Response data we will get:
Allow: GET, POST, PUT, DELETE, OPTIONS
```

7. HEAD Method

- Retrieves metadata (response headers) for a resource without fetching the body.
- **When to Use**:
  - Use HEAD to check if a resource exists.
  - Useful for getting metadata like content length, type, or caching details.
  - Similar to **GET**, but only returns headers, making it more efficient.

```http
HEAD /api/users
```
```json
// Response data we will get:
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 125
Cache-Control: no-cache
```

**[⬆ Back to Top](#table-of-contents)**

---

34. Callback vs Promises vs Async/Await

**[⬆ Back to Top](#table-of-contents)**

---

35. Function Expression and Anonymous Function

**[⬆ Back to Top](#table-of-contents)**

---

36. First Class Function

**[⬆ Back to Top](#table-of-contents)**

---

37. #### Params vs Arguments

**[⬆ Back to Top](#table-of-contents)**

---

38. #### What is NaN

**[⬆ Back to Top](#table-of-contents)**

---

40. #### Is JavaScript a Compiled or Interpreted Language

**[⬆ Back to Top](#table-of-contents)**

---

40. #### Delete Operator


**[⬆ Back to Top](#table-of-contents)**

---

41. #### Memory Management in JS (Heap vs Stack)

JavaScript uses two primary areas for memory management: **stack** and **heap**. 

The type of value determines where it is stored:
- **Stack**: Stores **primitive values** (fixed size like numbers, strings, booleans, etc.) and local variables.
- **Heap**: Stores **reference values** (dynamic size like objects, arrays, and functions).

Garbage Collection
JavaScript is a **garbage-collected** language. Its engine, like V8 (used in Chrome and Node.js), automatically detects and clears unused memory using algorithms like **Mark-and-Sweep**. 

- **Garbage Collection**: Periodically clears memory for objects that are no longer accessible.
- **Unreachable Memory**: If a value or object cannot be accessed, it is flagged for removal.

1. Stack

The memory space for **static data**. It stores **primitive types** (numbers, strings, booleans, undefined, null, symbols) and **local variables**.

- **Faster** memory access and **automatic cleanup**.
- **Direct access** to data for fast retrieval.
- Memory is allocated **linearly**, each new item is added on top.
- Changes to the variable didn't affect (means it copies the actual value).

```javascript
// Direct access + primitive type + Fast memory access + Changes didn't affect + Linearly allocated
let num = 10; // Primitive (stack)
let str = "Hello"; // Primitive string

function add(x, y) {
  let sum = x + y; // sum is stored on the stack (linearly)
  return sum;
}

// let num = 42; // Primitive (stack)
// num = 5555; // Creates copy
// console.log(num); // Direct access
```

2. Heap

The memory space for **dynamic data**. It stores **non-primitive data types**, including **objects**, **arrays**, and **functions**.

- **Slower** access compared to stack, but flexible for growing and shrinking data.
- Memory is **not allocated linearly**. The memory is set up by reference, with actual data on the heap, and variables holding references on the stack.
- Data is **referenced** by variables, and **multiple variables** can reference the same data. Changes to one reference affect **all references**.

```javascript
let user = { name: "Ahad", age: 25 }; // Object (heap)
let arr = [1, 2, 3]; // Array (heap)

let obj1 = { value: 10 }; // Object on heap
let obj2 = obj1; // References the same object

console.log(user); // Accessing object in heap
console.log(arr); // Accessing array in heap

obj1.value = 20; // Changes the value of obj1

console.log(obj2.value); // 20 (both obj1 and obj2 reference the same object) + Didn't be direcly accessed
```

![image](https://github.com/user-attachments/assets/93e77726-b29d-4101-87a9-c8ce0415277d)

**[⬆ Back to Top](#table-of-contents)**

---
