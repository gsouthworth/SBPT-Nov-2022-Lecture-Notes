/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = '8976'

if (age >= 99) {
    console.log(`You're probabaly not doing much anymore...`)
} else if(age >= 25) {
    console.log('You can rent a car!')
} else if (age >= 21) {
    console.log('You can Drink!')
} else if (age >= 18) {
    console.log('You can vote!')
} else {
    console.log (`Sorry, you're too young to do anything.`)
}


/* 
    Write a Ternary that does the same thing as the age challenge
*/