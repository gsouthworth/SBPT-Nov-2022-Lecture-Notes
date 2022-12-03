/* 
! Conditionals 
    -Evaluates an expression and responds if it is true
    -Falsy
        - false
        - 0
        - " " , ' ' (empty strings)
        - null
        - undefined
        - NaN (not a number)
*/

let isOn = true;

if(isOn == true) {
    console.log('the light is on!');
}
/* 
    Structure:

    if (expression evaluated) {
        ... code that runs if expression is true.
    }
*/

if(isOn)
    console.log('The light is on, yay!');

    let newString = `Sample string`

    //----------------------------------------------

isOn= false;

if(isOn == false){
    console.log('The light is off');
}

let weather = 72;

if(weather < 70) {
    console.log('Wear a jacket.')
} else {
    console.log('No jacket necessary!')
}

//And, Or, Not

let rain = true;

if(weather< 70 && rain) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary')
}

if(weather > 70 || rain) {
    console.log('Wear a jacket');
} else {console.log('no jacket')}

if(!rain) {
    console.log('Seems to be a clear day');
} else {
    console.log('Grab and umbrella')
}

let grade = 75;

if(grade > 75) {
    console.log('passing');
} else if(grade >= 69) {
    console.log('Please see the teacher');
} else {
    console.log('Failing');
}

//! Switch ------------------------------------------------
/* 
    Keywords:
        - switch
        - case       
        - break
            -takes us out of our code block
        - default
            - runds if no cases match

    Structure:

    switch(expression) {
        case ... :
            return;
            break;
        default:
            return;
    }
*/

let officeCharacter = "Michael";

switch(officeCharacter) {
    case 'Michael':
        console.log("my mind is going a mile an hour.")
        break;
    case 'Dwight':
        console.log("Oerfectenschlag")
        break;
    case 'Jim':
        console.log("Bears. Beets. Battelstar Galactica.")
        break;
    case 'Pam':
        console.log('Yup')
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

let num = 5;

switch (true) {
    case (num < 0 && num> -10) :
        console.log('case 1 ran')
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work')
        break;
}

//! Ternary ------------------------------------------------------
/* 
    Always a If/Else condition at minimum.

    Structure:

    expression ? True : False; */

    let expression = false;

/* if(false) {
    console.log('Runs True');
} else {
    console.log('Runs False');
} */

expression ? console.log('runs true') : console.log('runs false');

let newNum = 6;

num > 0 ? console.log('yes') : console.log('no');


// as an if/else
if(num > 0) {
    console.log('yes');
} else {
    console.log('no');
}

// Else/If
if(newNum == 0) {
    console.log ('hello');
} else if (newNum <0) {
    console.log('hi');
} else {
    console.log('goodbye');
}

(newNum == 0) ? console.log('Hello') : (newNum < 0) ? console.log('hi') : console.log('goodbye again');

