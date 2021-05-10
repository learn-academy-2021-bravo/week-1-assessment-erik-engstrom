// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// // Write a function that takes one parameter 
// const boiling = (temp) => {
//     // Create an empty "basket" to add the function results to what will be returned
//     let isItBoiling = ("")
//     // Need an if statement to look for if the temperature is below boiling point
//     if (temp < 212){
//         console.log(`${temp} is below boiling point`);
//     }
//     // Need an if statement to look for if the temperature is at boiling point
//     else if(temp == 212) {
//         console.log(`${temp} is at boiling point`);
//     }
//     // Need an if statement to look for if the temperature is above boiling point
//     else if(temp > 212){
//         console.log(`${temp} is above boiling point`);
//     }
//     // Catch all in case a number isn't passed through as an argument
//     else{
//         "Something messed up somewhere, try entering a number"
//     }
//     // Return the "basket" and it's new contents generated from the function
//     return isItBoiling
// }
// // Invoke the function and pass in the argument(s) to be evaluated.
// console.log(boiling(temp1));
// console.log(boiling(temp2));
// console.log(boiling(temp3));







// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9]
 // Write a function that takes one parameter 
// const multiply = (number) => {
     // Set a new empty "basket" to collect the function evaluations
//     let newNumbers = [];
     // for loop to iterate over the array
//     for(i=0; i<number.length; i++){
       // Action to be taken for each number in the array
//         newNumbers.push(number[i]*5)
//     } 
     // Return the new array with the multiplied values
//     return newNumbers
// }
 // Pass in the argument to the multiply function to be evaluated
// console.log(multiply(myNumbers1));





// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

// var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]
// // Write a function that takes one parameter 
// const giveOdds = (nums) =>{ 
//     // define an empty array to return the results
//     let oddNums = []
//     // iterate over the array 
//     for ( let i=0; i<nums.length; i++){
//         // need an if statement to reject even numbers and return odd numbers
//         if(nums[i] % 2 !==0){
//             // action to be taken with odd numbers. Add to new array oddNums
//             oddNums.push(nums[i])
//         }
//     }
//     // Return the new contents of the evaluated function
//     return oddNums
// }
// // Invoke the function giveOdds
// console.log(giveOdds(myNumbers2))





// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"
// // // Write a function that takes one parameter 
// const noVowels = (string) => {
//     // use string method .toLowerCase() to convert all letters to lowercase
//     let lower = string.toLowerCase()
//     // use built in method .replace to identify characters you would like to have replaced
//     return lower.replace(/[aeiou]/g, '')
    
// }
// console.log(noVowels(stringWithVowels1))
// console.log(noVowels(stringWithVowels2))




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

const noVowels = (string) => {
    // use string method .toLowerCase() to convert all letters to lowercase
    let lower = string.toLowerCase()
    // write an if statement to only pass through a string and give an error if any other data type is passed in the argument.
    if (typeof lower !== ""){
        return false;
    }
    // Else statement to return if argument is a string
    else{
    return lower.replace(/[aeiou]/g, '')
    }
    
}
console.log(noVowels(refactorTester1))
console.log(noVowels(refactorTester2))
console.log(noVowels(refactorTester3))
