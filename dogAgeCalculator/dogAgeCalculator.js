 

// Your task: Make a dog age calculator with Node.js!

// Follow the instructions in the README.md file in this repo.

// Run this file with the node command:
// node dogAgeCalculator.js

// Index	Value
// 0	path to Node
// 1	path to your file
// 2	dog name
// 3	dog age

// Get the dog's name and age from the command line
//process.argv is a list (array) of all the words the user typed in when running the program (arguments)
let dogName = process.argv[2];
let age = Number(process.argv[3]);

// This variable will store the dog's age in dog years, but there's no value assigned yet. We declare it first because we want to use it after the if/else block in the console log, so we need it to exist outside the braces of the if/else statement. This version is shorthand for let dogYears = undefined or let dogYears = 0 or let dogYears = null;;
let dogYears;

// Convert the dog's age to dog years
if (age === 1) {
    // A 1-year-old dog is about 15 dog years
    dogYears = 15;
} else if (age === 2) {
    // A 2-year-old dog is about 24 dog years
    dogYears = 24;
} else {
    // After age 2, each additional year counts as 5 dog years. 
    dogYears = 24 + (age - 2) * 5;
}

// Display the results to the user
console.log(`Your dog, ${dogName}, is ${age} years old, but that's ${dogYears} years old in dog years!`);

//node dogAgeCalculator.js Ralph 4