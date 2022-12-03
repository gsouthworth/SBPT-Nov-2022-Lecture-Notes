/* 
!   Challenge:
    Create 6 different variables. Each one will hold different data types.
        - variable will be detail:
            - First Name - holds a string
            - Last Name - holds a string
            - Birth Year - holds an integer
            - Needs Coffee - holds a boolean
            - The Current Year - holds an integer
            - Age - holds an integer.
                - This should reflect the difference between the current year and birth year. Not a literal.

        These values can be fictional.

            - Console Log Age.
        
*/

let firstName = 'Gavin'
let lastName = 'Southworth'
let birthYear = 1996
let currentYear = 2022
let yes = true
let age = currentYear - birthYear

console.log(currentYear - birthYear)
console.log(firstName, lastName, currentYear - birthYear)
console.log('age', currentYear - birthYear)
console.log(firstName, lastName,',', 'age', currentYear - birthYear)
