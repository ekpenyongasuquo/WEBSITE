// counting in ascending and descending order

count = 0;
document.getElementById("increaseButton").onclick = function () {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function () {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}

//Arrow function
// Using function expression
const greetings = function (userName) {
    console.log("Hello", userName);
}
greetings("Mfon")

// Using arrow fuction
const greeting = (userName2) => console.log("hello", userName2);
greeting("Asuquo");

// Function expression
const percent = function (x, y) {
    return x / y * 100;
}
console.log(percent(70, 100));

//Using arrow function
const percents = (x, y) => x / y * 100;
console.log(percents(60, 200));