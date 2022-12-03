//Variables are containers  that hold information for us.

/* 
    var
    let
    const
        -variables that hold data - doesn't change
    (or none)
*/

let a = 2;

let b = 1;
/* 
    let - JavaScript keyword to denote the creation of the variable
    b - the name of the variable
        -Developers refer to in order to grab the value stored
    = - assignment operator
    1 - the initial value
*/

// Variable Declaration
        let x;  // Created an empty box (created the variable, no assigned value yet)

   // Variable Initialization
        let y = 10; // to give value to the decleration (anything righ tof the assignment operator)

    // Assigning to other variables
        let first = 'John';
        let last = 'smith';
        
let full = first + last;

console.log('declaration:', x); // Declaration: undefined

x=10 // assigning our variabe
console.log('declaration 1: ', x);

x = 33; // reassigning the value of our variable.
console.log('initialization 2: ' , x);

let hi = 'hello'
console.log('both: ' , x, hi);

// const = 'new' in ES6: declare variables meant to remain unchanged.
let today = 'great!';
const JavaScript = 'Wonderful';
console.log(today, JavaScript);

today = 'lovely!' ;
console.log(today, JavaScript);

console.warn('this is a warning');

let warning = 'uh oh';
console.warn('warn' , warning);

let err = 'this looks real bad...';
console.error('error: ', err);
