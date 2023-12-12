// Array of arrays
let fruits = ["apples", "oranges", "bannas"];
console.log(fruits[0]);

//Replace an elements
fruits[0] = "coconuts";
console.log(fruits[0])

//Add element to array
fruits.push("lemons"); // add element at end of array
console.log(fruits);

// Remove an elemt at end of array
fruits.pop();
console.log(fruits);

//Add an element at beginning
fruits.unshift("mangos");
console.log(fruits);
//Remove element at the beginning
fruits.shift();
console.log(fruits);

// Length of an elements in array
let length = fruits.length;
console.log(length);

// Index of element in the array
let index = fruits.indexOf("coconuts");
console.log(index);
