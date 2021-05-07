// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2021"
// console.log(cohort.length)

// a) Your answer:10
// b) Verify and explain: The .length method counts how many characters are in the string or array and returns the value when passed into console.log  


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer:l
// b) Verify and explain: This is asking for the value at the 3rd index of the string "Hello World" and that value a the 3rd index is l. It is important to remember that the first index is the 0 index.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer:"Ruby"
// b) Verify and explain: This is passing in the variable index value of 1 as the argument to the languages variable which is defined as an array of 4 strings. The 1st index of the languages array is "Ruby" 


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:"SATURDAY", "SUNDAY"
// b) Verify and explain: The .toUpperCase() method transforms the string into all uppercase letters. And upon checking the console.log() it gave me an error saying the .toUpperCase() is not a function. After looking it up, I learned that .toUpperCase() does not work on an array of strings. I think weekendDays.toUpperCase() would have to be iterated over a for loop in order to return upper case to both strings. 


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: String
// b) Verify and explain: All the data types in the array dataTypes are strings. Even though they say number, string and boolean, they are strings because they're wrapped in quotations "". I ran the code and it returned number. Not 100% sure why.
