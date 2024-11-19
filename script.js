                             // EXCECUTION CONTEXT IN JAVASCRIPT
/* What is excution context?

Excetion context is an environment in which the javascript code is executed and evaluated.In simple word it is like a workspace where JavaScript runs your code.
There are two types of execution context:
1. Global Execution Context
2. Functional Execution Context */


/* Global Execution Context:

    When the JavaScript code is executed outside of the function, it is executed in the global execution context. It is also called a base execution context. it is created automatically when the JavaScript code is executed.
    --> Globel ecexution context refers to the global object. 
    
    What is the global object?
    Global object stored the value of the global variable. In the browser, the global object is the window object.

    for example:

    var a = 10;  // var a is a global variable
    console.log(a); // Output: 10
    console.log(window.a); // Output: 10   we can also get the ouptut by using window object
    console.log(this.a); // Output: 10 

    The global execution context is created in two phases:
    1. Memory Creation Phase or Creation Phase
    2. Execution Phase

    Memory Creation Phase or Creation Phase:

    In this phase, the JavaScript engine allocates memory for the variables and functions.
    ---> It give memory to the variable and set it to undefined.
    ---> It stores the function in the memory. In other word it stores the fuction definition in the memory.

    for example:
    1. var a =10 // memory is allocated for the variable a and set it to undefined.\

    2. function add(a,b){  // memory is allocated for the function add
        return a+b;
    }
    
    Execution Phase:

    In this phase, the JavaScript engine executes the code line by line.
    ---> It assigns the value to the variable.
    ---> It executes the function.

    for example:
    1. var a = 10; // a is assigned the value 10
     console.log(a); // Output: 10
*/

/*  
Function execution context:

When the JavaScript code is executed inside the function, it is executed in the functional execution context. It is created when the function is called.
    The functional execution context is created in two phases:
    1. Memory Creation Phase or Creation Phase
    2. Execution Phase

    Memory Creation Phase or Creation Phase:
    same above process is repeated in the functional execution context.
    
    Execution Phase:
    same above process is repeated in the functional execution context.
    for example:
    function add(a,b){
        return a+b;
    }
    add(10,20); // Output: 30

    Note: 
    --> The functional execution context is created when the function is called.
    --> The functional execution context is destroyed when the function returns some result.
    --> It return the result to the global execution context.

    for example:
    let a =10; // a is a global variable so it is stored in the global execution context.
    let b =20; // b is a global variable so it is stored in the global execution context.
    function add(a,b){
        return a+b; // it return the result to the global execution context.
    }
    let result = add(a,b); //At point 3 we talk about the function return result to global execution context. So the result is our globel ectution context.
    console.log(result); // Output: 30
*/

/*
What is the Call Stack in JS?

The call stack is a tool used by JavaScript to manage the execution of functions in your code.
It follows the LIFO (Last In, First Out) principle:
    --> The last function added to the stack is the first one to finish and be removed.

for example:
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

let result1 = add(10, 20); // Call stack adds 'add' function
let result2 = sub(20, 10); // Call stack adds 'sub' function
// Output the results
console.log(result1); // Output: 30 (after 'add' is finished and removed from stack)
console.log(result2); // Output: 10 (after 'sub' is finished and removed from stack)

*/

                                            // Clouser in JavaScript

/* What is a closure in JavaScript?
A clouser is a function which access the variable of the outer function even after the outer function has executed. In other words, a closure gives you access to an outer function’s scope from an inner function. 
--> In JavaScript, closures are created every time a function is created, at function creation time.

for example:

function outerFunction() {
    let name = "Name"; // This variable is in the outer function's scope

    // Inner function definition
    function innerFunction() {
        // The inner function has access to 'name' because of closure
        console.log(name); // This will log the value of 'name'
    }

    // Returning the inner function, creating a closure
    return innerFunction; 
}
let inner = outerFunction(); // Storing the returned inner function in a variable
inner(); // Output: Name


Advantages of using closures:
1. Data privacy / Data encapsulation
2. Maintain state
3. Factorize functions

Data privacy / Data encapsulation:
Clouser are used to create private variable and functions. Means the varible are defined in the outer function and can only be accessed within the outer function. It is not accessible from outside the function.

for example:
function private(){
    let count =0
    function incrementCount(){
        return count++
    }
    function getCount(){
        return count
    }
    return{
        incrementCount, getCount
    }
}
let cou = private();
console.log(cou.getCount());  // output: 0
cou.incrementCount() // increment the count by 1
console.log(cou.incrementCount()); // output: 1


Maintain state:
Clouser are used to maintain the state of the variable. It is used to keep the variable value between the function calls.

for example:
function call(){
    let time =1
    function timmer(){
        return time++;
    }
    return timmer
}
let timer = call()
console.log(timer()) // output: 1
console.log(timer()) // output: 2

Factorize functions:
Clouser are to factorize the function. It remembers the value of the variable and use it in the next function call.

for example:
function multiplier(factor){
    function num(number){
        return factor * number
    }
    return num;
}
let double = multiplier(2)
console.log(double(10)) // output: 20

disadvantages of using closures:
1. Memory consumption
2. Performance issues
3. Debugging issues

Memory consumption:
Clouser consume more memory because it stores the  value of the outer function even after the outer function has executed.

Performance issues:
Clouser consume more memory so it can slow down the performance of the application.

Debugging issues:
Clouser can make the code difficult to debug because it is hard to understand the code.

*/

                                     //  IIFE (Immediately Invoked Function Expression) In JavaScript
/*
What is IIFE?

IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that runs as soon as it is defined.

types of IIFE:
1. Anonymous function IIFE

for example:
(function() {
    console.log("Hello, I am Anonymous function IIFE !");
})();

2. Named function IIFE

for example:
(function welcome() {
    console.log("Hello, I am Named function IIFE !");
})();

*/ 