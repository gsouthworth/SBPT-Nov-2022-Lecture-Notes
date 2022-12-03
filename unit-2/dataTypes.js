// Booleans: true or false
let on = true;
console.log(on);

let off = false;
console.log(off);

// Null: empty value/container
let empty= null;
console.log(empty);

// Undefined: no value assigned, does not act as empty container
let undef = undefined; // instead of assigning our undef cariable a data type of undefined , we can simply just declare the variable
console.log(undef);

let correct;
console.log(correct);


// Numbers 
let degrees = 90;
/* confirm.log(degrees); */

let precise = 999999999999999; //15 9s
/* console.log(precise); */

let rounded = 9999999999999999; //16 9s
/* console.log(rounded); */ // JavaScript give us space for 15 9s before it rounds up.

let notQuite = 0.2 + 0.1;
/* console.log(notQuite); */

// String
let stringOne = "double quotes";
let stringTwo = 'single quotes';

let myQuote = 'they said, "blah blah blah".'

// NUmbers vs. Strings

let first = 1234 + 567;
let second = '1234' + '567'
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);
// typeof provides us the data type of a variable

let createNumber = Number('123'); //creates 'string' as number

let sum = '1' + 3;
console.log(typeof sum);
//type coercion: when we take one data type become another

// Objects -->holds multiple datatypes
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);

// Arrays --> Holds list of items
let list = ['item1', 'item2', 'item3'];
//    1    2   3
/* 
    1. name of the array or list
    2. The array is inside of these square brackets
    3. each item, regardless of datatype, is seperated by commas.

    denoted by []
*/

let burritos = ['large', 4, true];

// Literls --> fixed vlues we insert into code
// String literal
let car = 'ford';
let truck = car; // not literal, no true value defined

//numeric
let december = 12;

//boolean
let tired = true;

// object
let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}

// array
let days = ['mon', 'tues', 'wed',];

console.log(days.toString());
console.log(days.length);




