//Sychronous code = Inordered sequence. Step-by-step
// linearinstructions(start now, finish now)
//Asychronous code = Out of sequence. Fetch a file
// Taasks that take time(start now, finish sometimee later)

//Synchronous code
console.log("START");
console.log("This is synchronous code");
console.log("END");

//Asynchronous code
console.log("START");
setTimeout(() => console.log("This is asynchronous code"), 2000);
console.log("END");

// console.time() = Starts a timer you can use to track how long an operation takes. Give each timer a unique name.

console.time("Response time");
setTimeout(() => console.log("Hello"), 3000);
console.timeEnd("Response time");


