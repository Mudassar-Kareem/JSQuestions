# What is JavaScript?

JavaScript is a **high-level**, **single-threaded**, **interpreted programming language** with **asynchronous capabilities** (through features like Web APIs and Promises).

It is a versatile scripting language that enables you to:
- **Create dynamically updating content**: Build interactive web pages with dynamic elements.
- **Control multimedia**: Manage audio, video, and other media elements effectively.
- **Animate images**: Add engaging animations and effects to your websites.

---

# What Makes JavaScript Great?

- **Simplicity**  
  JavaScript has a straightforward structure, making it easy to learn and implement. It runs faster than many other languages, and errors are simple to identify and fix.

- **Speed**  
  JavaScript executes directly in the web browser without requiring a server or compiler. Modern browsers optimize performance by compiling JavaScript during execution.

- **Popularity**  
  With countless resources, forums, and an active community, JavaScript is beginner-friendly and provides ample support for learners at all levels.

- **Reduced Server Load**  
  JavaScript operates on the client-side, minimizing requests sent to the server. Tasks like data validation are handled in the browser, and updates are applied only to specific parts of the web page.

---

# What Are JavaScript’s Weaknesses?

- **Browser Compatibility**  
  Different browsers may interpret JavaScript code differently, leading to inconsistencies. Always test your scripts across popular browsers (including older versions) to ensure a smooth user experience.

- **Security Risks**  
  Since JavaScript runs on the client-side, it is vulnerable to misuse or exploitation by malicious users, such as cross-site scripting (XSS) attacks.

---

# What is a Thread of Execution?

A **thread** is a single, sequential flow of control in a program, often referred to as a process.  
Everything in a program happens line by line.  

- A thread has:
  - **Call Stack**: Tracks the execution of functions.
  - **Memory Heap**: Stores variables and data.  

![Thread of Execution](https://github.com/user-attachments/assets/16692c74-4cb4-4efc-896d-62abd15f2b11)

---

# What is a Call Stack?

The **call stack** is a tool JavaScript uses to manage the execution of functions in your code.  
It tracks function execution and manages the **execution context**. Think of it as a stack of functions, following the **LIFO** (Last In, First Out) principle.

### How the Call Stack Works:
1. **Adding Functions (Push)**: When a function is called, it is pushed onto the stack.
2. **Removing Functions (Pop)**: Once the function's execution is complete, it is popped off the stack.

- The **bottom** of the call stack is the **global execution context**.
- Functions are executed one by one and removed as they complete.
- The last function added is the first one to finish and be removed.
- Any code to be executed must first go into the stack.

### Call Stack Examples:
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/c6f4f9e1-2d30-4ce2-9599-e9165883e17d" alt="Call Stack Example 1" style="width: 32%; min-width: 100px;">
  <img src="https://github.com/user-attachments/assets/a6bf1e8d-ef52-43bf-aacd-589bcf98b7fd" alt="Call Stack Example 2" style="width: 32%; min-width: 100px;">
  <img src="https://github.com/user-attachments/assets/b29c901a-93f0-4dfa-8beb-674072249203" alt="Call Stack Example 3" style="width: 32%; min-width: 100px;">
</div>

---

# What is Execution Context?

Execution context is an environment in which JavaScript code is executed and evaluated. In simple terms, it acts as a **workspace** where JavaScript runs your code.  

When JavaScript runs, a special environment is created to handle the transformation and execution of code. This is called the **execution context**. It contains the currently running code and everything required for its execution.  
- **Everything happens in the execution context.**

### Components of Execution Context:

1. **Memory Component (Variable Environment)**  
   - Contains the scope chain, variable environment, and `this` keyword binding.  
   - Sets up a memory heap to store variables and function references.  

2. **Code (Execution Component)**  
   - A thread of execution where each line of code is executed sequentially.  
   - Represents the actual running of JavaScript code.

### Execution Context Workflow:
![Execution Context Diagram 1](https://github.com/user-attachments/assets/31c381a4-eccc-4462-85b9-dd0b92cb0342)  
![Execution Context Diagram 2](https://github.com/user-attachments/assets/4d43d066-22b4-4730-aafc-3240050b05ba)  

[**Learn More About How Execution Context Works in JavaScript**](https://javascript.plainenglish.io/how-javascript-executes-your-code-e3562ede5764)

### Types of Execution Context:
1. **Global/Base Execution Context (GEC)**  
   - Created when the script starts running.  

2. **Function Execution Context (FEC)**  
   - Created every time a function is invoked.  

3. **Eval Execution Context (EEC)**  
   - Created during the execution of the `eval()` function.

--- 

# What is Global/Base Execution Context (GEC)?

The **Global Execution Context (GEC)** is the default execution context created when JavaScript starts running. It provides an environment for global variables and functions.  

- Stores variables and functions as **key:value pairs** in memory.  
- Created automatically when the code begins execution.  
- Represents the **global scope**.  
- Creates the **global object**:
  - `window` in browsers.  
  - `global` in Node.js.  
- Sets `this` to the global object.  

### Workflow of GEC:
1. **Memory Creation Phase**:
   - Allocates memory for variables (set to `undefined`) and functions (stores their entire definition).  
2. **Execution Phase**:
   - Assigns values to variables and executes the code line by line.

#### Memory Creation Phase:
```javascript
var a = 10; // Memory is allocated for the variable 'a' and set to undefined.

function add(a, b) { // Memory is allocated for the function 'add'.
    return a + b;
}
```
#### Execution Phase:
```javascript
var a = 10; // 'a' is assigned the value 10.
console.log(a); // Output: 10
```

# What is the Global Object?

The **global object** is an object that stores the values of all global variables in a JavaScript environment.

- In **browsers**, the global object is called `window`.  
- In **Node.js**, it is called `global`.

```javascript
var a = 10; // 'a' is a global variable.

console.log(a);         // Output: 10
console.log(window.a);  // Output: 10 (in browsers)
console.log(global.a);  // Output: 10 (in Node.js)
```

---

# What is Function Execution Context (FEC)?

The **Function Execution Context (FEC)** is created every time a new function is invoked in JavaScript. When the JavaScript code is executed inside the function, it runs within its own function execution context.  

- A new **function execution context** is created each time a function is called.
- The function execution context is destroyed once the function returns a result.
- The result is returned to the **global execution context**.
- The value of `this` depends on how the function is called.

```javascript
let a = 10; // 'a' is a global variable stored in the global execution context.
let b = 20; // 'b' is a global variable stored in the global execution context.
function add(a, b) {
    return a + b; // The result is returned to the global execution context.
}
let result = add(a, b); // At this point, the function returns the result to the global execution context.
console.log(result); // Output: 30
```

---

# What is Eval Execution Context (EEC)?

The **Eval Execution Context (EEC)** is created whenever code is executed inside the `eval()` function in JavaScript.

- Created whenever code is executed inside the `eval()` function.
- Executes code contained within a string.
- Has its own **variable environment**.
- Rarely used due to security and performance concerns.

```javascript
eval('var a = 10;'); // Creates a new Eval Execution Context.
console.log(a); // Output: 10 (variable 'a' is accessible in the global scope)
```

---

# What is Scope, Scope Chain, Lexical Scope, and Lexical Environment?

## Scope
**Scope** refers to the region in which a variable can be accessed. It determines the **visibility** and **lifetime** of variables.

JavaScript variables have 3 types of scope:
1. **Block Scope** - Variables are only accessible within the block where they are defined (e.g., inside `{}`).
2. **Function Scope** - Variables are accessible only within the function in which they are declared.
3. **Global Scope** - Variables declared outside any function or block are globally accessible.

## Scope Chain
The **scope chain** is the order in which JavaScript looks for variables. It is created when functions are nested within other functions. Each function has access to its own variables, as well as the variables from its parent functions. This forms a chain of scopes, allowing inner functions to access variables from outer functions.

When JavaScript wants to read or write a variable, it starts from the current scope and recursively checks the parent scopes until it finds the variable. If the variable is not found, it throws a `ReferenceError`.

`Scope Chain Order:`
- `innerFunction` scope
- `outerFunction` scope
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

## Lexical Scoping
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

**innerFunction has access to outerVariable because it is lexically inside outerFunction.**

## Lexical Environment
A **lexical environment** is an internal structure used by JavaScript to track variables and functions in a particular scope. Each lexical environment consists of two main components:
1. **Environment Record**: Stores the variables and functions of that scope.
2. **Reference to Parent Lexical Environment**: Maintains the scope chain to access parent environments.

```javascript
function a() {
    let x = 10;
    function b() {
        let y = 20;
        console.log(x); // Access parent lexical environment
    }
    b();
}
a();
```

- **Scope Chain**: JavaScript searches for a variable starting from the current scope and going up through parent scopes.
- **Lexical Scoping**: A function can access variables from the scope where it was defined, not where it is called.
- **Lexical Environment**: The structure that keeps track of variables and references to parent lexical environments.
  
---

# What is Closures?

A **closure** is a combination of a function bundled together with references to its surrounding state (the lexical environment). It allows an inner function to access variables of its outer function even after the outer function has finished execution.

In simpler terms, a **closure** gives access to an outer function’s scope from an inner function, even after the outer function has executed.

1. **Retains Access to Outer Scope**: A closure retains access to its outer function's variables, even after the outer function has finished execution.
2. **Lexical Environment**: A closure is the combination of a function and its lexical environment in which it was declared.

### Closure has three scope chains:
- **Own scope**: The variables defined within its own function.
- **Outer function's variables**: Variables from the outer function's scope.
- **Global variables**: Variables accessible globally.

```javascript
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
```javascript
```javascript
function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}

var myFunction = Welcome("John");
myFunction("Welcome "); // Output: Welcome John
myFunction("Hello Mr."); // Output: Hello Mr. John
```
The inner function `greetingInfo` retains access to the `name` variable from the outer function `Welcome`, even after it has finished executing.

### Advantages of Closures:

1. **Data Privacy / Data Encapsulation**  
   Closures provide a way to create private variables that are hidden from the global scope, improving data security and modular code.
   ```javascript
   function private() {
     let count = 0;
     function incrementCount() {
         return count++;
     }
     function getCount() {
         return count;
     }
     return {
         incrementCount, getCount
     };
   }

   let cou = private();
   console.log(cou.getCount());  // Output: 0
   cou.incrementCount(); // Increment the count by 1
   console.log(cou.incrementCount()); // Output: 1
    ```
 2. **Maintain State**
    Closures allow functions to remember and access their outer scope even after they are executed, which helps maintain state in applications.

    ```javascript
    function call() {
      let time = 1;
      function timmer() {
          return time++;
      }
      return timmer;
    }
    
    let timer = call();
    console.log(timer()); // Output: 1
    console.log(timer()); // Output: 2
    ```

3. **Factorize Functions**  
   Closures are used to factorize a function. It remembers the value of the variable and uses it in the next function call.
   
  ```javascript
  function multiplier(factor) {
    function num(number) {
        return factor * number;
    }
    return num;
  }
  
  let double = multiplier(2);
  console.log(double(10)); // Output: 20
  ```

### Disadvantages of Closures

1. **Memory consumption**  
Closures consume more memory because they store the value of the outer function's variables even after the outer function has executed.

2. **Performance issues**  
Closures consume more memory, which can slow down the performance of the application, especially if used excessively or in large applications.

3. **Debugging issues**  
Closures can make the code difficult to debug because they create a more complex scope chain and it can be challenging to track where variables are coming from.

---

# What is IIFE (Immediately Invoked Function Expression)

IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below:

```javascript
(function () {
  // logic here
})();
```

## Types of IIFE

### 1. Anonymous Function IIFE
```javascript
(function() {
    console.log("Hello, I am Anonymous function IIFE !");
})();
```
```javascript
(() => console.log("Hello, I am Anonymous function IIFE !"))()
```

### 2. Named Function IIFE
```javascript
(function welcome() {
    console.log("Hello, I am Named function IIFE !");
})();
```
```javascript
(function add(a, b) {
    console.log(a + b);
})(2, 3);
```

### Benefits of Using IIFE

#### 1. Data Privacy
IIFE is used to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. If you try to access variables from the IIFE, it throws an error, helping avoid polluting the global scope.

```javascript
(function () {
  var message = "IIFE";
  console.log(message);
})();
console.log(message); // Error: message is not defined
```

#### 2. Return Value from IIFE
IIFE is also used to return values immediately from functions.

```javascript
var value = (() => 100)();
console.log(value); // Output: 100
```

#### 3. Asynchronous IIFE
IIFE allows you to execute async/await operations immediately.

```javascript
(async () => {
  // Asynchronous logic here
})()
```

Without IIFE:
```javascript
let data;
async function getData() {
  data = await fetch(url);
}
```
With IIFE:
```javascript
const data = (async () => await fetch(url))();
```

---

# How to invoke an IIFE without any extra brackets?

Immediately Invoked Function Expressions (IIFE) require a pair of parentheses to wrap the function, which contains a set of statements.

```javascript
(function (dt) {
  console.log(dt.toLocaleTimeString());
})(new Date());
```

Since both IIFE and the `void` operator discard the result of an expression, you can avoid the extra brackets using the `void` operator for IIFE as shown below:

```javascript
void function (dt) {
  console.log(dt.toLocaleTimeString());
}(new Date());
```

---

# What is Hoisting?

Hoisting refers to the process where the JavaScript interpreter moves the declaration of functions and variables to the top of their respective scopes during the creation phase. This means variables, functions, and classes can be accessed before they are defined in the code.

- **Hoisting Behavior**: JavaScript hoists (moves) variable and function declarations to the top of their scope during the creation phase.
- **Global Execution Context**: Hoisting happens in the global execution context as well as within functions and blocks.
- **Declaration vs Initialization**: Only **declarations** (not initializations) are hoisted. The value assigned to a variable is not hoisted, only the declaration.

```javascript
fun();
function fun() {
  console.log("Hi"); // fun() can be called before it is defined because the function declaration is hoisted to the top.
}
```

# Hoisting with `var`, `let`, and `const`

- **`var`** is hoisted and initialized with `undefined` during the creation phase.
- **`let`** and **`const`** are hoisted but are not initialized until their respective declarations are encountered in the code. This causes a "Temporal Dead Zone" (TDZ), where accessing them before initialization results in a `ReferenceError`.

### Example of Hoisting with `var`:
```javascript
console.log(x); // Output: undefined (x is hoisted but not initialized)
var x = 10;
console.log(x); // Output: 10
```

# Example of Hoisting with `let` and `const` (Throws `ReferenceError`)
In the case of `let` and `const`, variables are hoisted to the top of their block scope but are not initialized until their respective declarations are evaluated in the code. This causes a **Temporal Dead Zone (TDZ)**, and attempting to access the variable before it's initialized results in a `ReferenceError`.

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
```

![image](https://github.com/user-attachments/assets/e354fd45-0a09-4ee4-a8cd-3f4d12e10264)

**[More About Hoisting, TDZ and var/let/const](https://javascript.plainenglish.io/variable-environment-in-javascript-61630b5e76a9)**

---

# What is Temporal Dead Zone (TDZ)

The Temporal Dead Zone (TDZ) refers to the period between the creation of a variable with `let` or `const` and its declaration in the code. During this period, the variable exists (hoisted) but cannot be accessed, resulting in a `ReferenceError`.

Example:
```javascript
x = 30;
console.log(x);
let x = 10;
```

---

# Difference between `var`, `let`, and `const`

## Var
- **Hoisted**: `var` can be hoisted to the top of its scope.
- **Scope**: It is function-scoped, meaning it’s only available within the function it’s defined in, not within block-level scopes (like in an `if` or `for` block).
- **Redeclaration**: You can redeclare a variable using `var` multiple times in the same scope.
- **Reassignment**: You can change the value of a `var` variable at any time.

**Note**: Avoid using `var` in modern JavaScript. Its function-scoping can lead to unexpected behavior.

---

## Let
- **Hoisted**: `let` can be hoisted, but it can’t be accessed until its declaration due to the Temporal Dead Zone (TDZ).
- **Scope**: It is block-scoped, meaning it’s only available within the block it’s defined in (like inside an `if` or `for` loop).
- **Redeclaration**: You cannot redeclare a `let` variable within the same scope.
- **Reassignment**: You can change the value of a `let` variable.

**Note**: `let` is a good choice for variables whose values you plan to change.

---

## Const
- **Hoisted**: `const` is hoisted but can’t be accessed due to the Temporal Dead Zone (TDZ).
- **Scope**: It is also block-scoped like `let`.
- **Redeclaration**: You cannot redeclare a `const` variable within the same scope.
- **Reassignment**: You cannot change the value of a `const` variable once it’s been assigned. It’s constant.

**Note**: Use `const` for values that should never change.
**Pro Tip**: Use `const` by default unless you know the variable’s value will change, in which case, use `let`.

---

# Difference between `==` and `===`

`==` and `===` are both comparison operators used to compare values, but they work differently:

## `==` (Loose Equality Operator)
- **Type Coercion**: `==` checks for value equality but ignores the type of the operands. It attempts to convert (or "coerce") the values to be of the same type before comparing.
  
```javascript
5 == '5'; // true, because '5' (string) is converted to 5 (number) before comparing
true == 1; // true, because `true` is converted to 1 before comparing
null == undefined; // true, because `null` and `undefined` are loosely equal
```

**Note**: `==` can lead to unexpected results because it converts values to the same type before comparing.

## `===` (Strict Equality Operator)
- **No Type Coercion**: `===` checks for both **value** and **type** equality. It will only return `true` if both the **value** and **type** of the operands are exactly the same. No type conversion occurs.

```javascript
5 === '5'; // false, because one is a number and the other is a string
true === 1; // false, because `true` is a boolean, not a number
null === undefined; // false, because they are different types
```

**Note**: `===` is more predictable because it requires both the **value** and the **type** to be the same.

---

# Difference b/w null & undefined

Both `null` and `undefined` represent "empty" or "missing" values, but they have different meanings and are used in different situations.

### Undefined
- `undefined` means a variable has been declared but has not been assigned a value yet.
- JavaScript itself automatically assigns `undefined` to variables that are declared but not assigned any value.

### Null
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
