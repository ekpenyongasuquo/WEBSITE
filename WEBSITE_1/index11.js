// array.reduce() method
let prices = [100, 200, 300];
let total = prices.reduce(checkout);
console.log(total);


function checkout(total, element) {
    return total + element;
}


// Callback function in ascending order
/*
let grades = [100, 90, 50, 70, 40, 60];
let results = grades.sort(ascendingSort);
results.forEach(print);
console.log(results)

function ascendingSort(x, y) {
    return x - y;

}
function print(element) {
    console.log(element)
}
*/


// Descending order using callback function

let grades = [100, 90, 50, 70, 40, 60];
let results = grades.sort(descendingSort);
results.forEach(print);
console.log(results)
function descendingSort(x, y) {
    return y - x;

}
function print(element) {
    console.log(element)
}


// function expression

const greetings = function () {
    console.log("Hello World!");
}
greetings();