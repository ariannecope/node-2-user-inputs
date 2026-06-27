/* 

Your task: Make a Node.js pizza party planner that calculates how many slices of pizza each guest gets, and how many slices are left over!

Follow the instructions in the README.md file in this folder.

*/
let hostName = process.argv[2];
let numPizzas = Number(process.argv[3]);
let numSlices = Number(process.argv[4]);
let numGuests = Number(process.argv[5]);

let totalSlices;
let slicesPerGuest;
let slicesLeftOver;

totalSlices = numPizzas * numSlices;
slicesPerGuest = Math.floor(totalSlices / numGuests);
slicesLeftOver = totalSlices % numGuests;

console.log(`Hey ${hostName}! 🍕 You ordered ${numPizzas} pizzas with ${numSlices} slices each — that’s ${totalSlices} slices total!
Each of your ${numGuests} guests gets ${slicesPerGuest} slices, and you’ll have ${slicesLeftOver} slices left over.
Save those for breakfast! 😋`);