//! Loops
/* 
    FOR
        Takes in 3 parameters
            - initial expression
            - condition
            - inrement expression

    Structure:

    for(initial expression; condition; increment expression) {
        ... ocde block
    }
*/


// ++ increments veriable plus 1

for(i = 0; i < 10; i++) {
    console.log(i);
}

console.log('out of loop');

for(i = 0; i <= 20; i+= 2) {
    console.log(i);
}

for(i = 10; i > 0; i--) {
    console.log(i);
}


for(i = 10; i > 0; i--) console.log(i)

let firstName = 'Luke';
for(let i = 0; i < firstName.length; i++) {
    console.log(firstName[i]);
}

let sum = 0

for(let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);

//! For In ---------------------------------

let student = {
    name: 'Peter',
    awesome: true,
    degree: "JavaScript",
    week: 1
}

console.log(student['name']) // Pulls out the calue of "name" from the object.

for(item in student) {
    console.log(item); // notes each key in the object.
    console.log(student[item]) // notes the value of each key.
}

let catArray= [
    'tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'
];

for(cat in catArray) {
/*     console.log(cat); */
    console.log(catArray[cat]);
}

//! For Of ------------------------------------
/* for(item of student) {
    console.log(item);
}
 */

for(cat of catArray) {
    console.log('for of: ', cat);
}

for(cat of catArray) {
    if(cat === 'tabby') {
        console.log(cat);
    } else {
        console.log('Not Tabby');
    }
}



