 

// Your task: Make a dog age calculator with Node.js!

// Follow the instructions in the README.md file in this repo.

// Run this file with the node command:
// node dogAgeCalculator.js

// Index	Value
// 0	path to Node
// 1	path to your file
// 2	dog name
// 3	dog age

let dogName = process.argv[2];
let age = Number(process.argv[3]);
let dogYears;

if (age === 1) {
    dogYears = 15;
} else if (age === 2) {
    dogYears = 24;
}  else {
  dogYears = 24  + (age - 2) * 5;
}

console.log(`Your dog, ${dogName}, is ${age} years old, but that's ${dogYears} years old in dog years!`);
