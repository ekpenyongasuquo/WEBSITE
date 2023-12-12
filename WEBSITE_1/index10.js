//Call back function
let total = sum(2, 3);
displayConsole(total);
displayDOM(total);


function sum(x, y) {
    let result = x + y;
    return result
}
function displayConsole(output) {
    console.log(output);
}
function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}

// Another way ot writing the above
/*let total = sum(2, 3);
displayConsole(total);
displayDOM(total);

sum(2, 3, displayConsole);
function sum(x, y, callback) {
    let result = x + y;
    callback(result);
}
function displayConsole(output) {
    console.log(output);
}
function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}
*/

// for each method of array

let students = ["mfon", "ifiok", "sam"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}
//console.log(students[2]);
function print(element) {
    console.log(element);
}

// array.map()method 

let numbers = [1, 2, 3, 4, 5];
let cubes = numbers.map(cube);
cubes.forEach(print);


function cube(element) {
    return Math.pow(element, 3);
}
function print(element) {
    console.log(element)
}

//array.filter()method
let ages = [17, 21, 30, 15, 40, 90];
let adults = ages.filter(checkAge);
adults.forEach(print);

function checkAge(element) {
    return element > 18;
}
function print(element) {
    console.log(element);
}