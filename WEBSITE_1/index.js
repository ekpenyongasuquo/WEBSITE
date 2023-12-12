// Message
//console.log("Welcome to JavaScript tutorial with Bro Code");

// Alert message
//window.alert("I really love Bro code style of programming");

// Variable Declaration
//let age = 55;
//console.log("I am ", age, "years old");

// String Last name
//let lastName = "Mfon";
//console.log("My last name is ", lastName);

// Boolean
//let student = true;
//console.log("I are you a student in BYU Idaho", student);

//document.getElementById("p1").innerHTML = "My last name is " + lastName;

// arithmetic
//let students = 25;
//students = students + 1;
//console.log(students);

//students += 5;
//console.log(students);

// window prompt input
//let username = window.prompt("What is your name? ");
//console.log(username);

/*let username;
document.getElementsByid("myButton").onclick = function () {
    username = document.getElementById("myText").value;
    console.log(username);
    Document.getElementById("myLabel").innerHTML = username;
}
*/


/*let age = window.prompt("How old are you? ");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("How old are you", age, "years old");


// convert to different data types

x = Number("3.14");
y = String(3.14);
z = Boolean("Afang");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/
/*const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius ");
radius = Number(radius);
circumference = PI * radius;
console.log("The circumference is:", + circumference);
*/

// Pythagoras Theorem
let a;
let b;
let c;
/*a = window.prompt("Enter side A: ");
a = Number(a);
b = window.prompt("Enter side b: ");
b = Number(a);
c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
console.log("Hypotaneous of the Triangle is ", c);
*/

// Pythagoras Theorem using DOM
document.getElementById("SubmitButton").onclick = function () {
    a = document.getElementById("aTextbox").value;
    a = Number(a);
    b = document.getElementById("bTextbox").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById("cLabel").innerHTML = "Side C: " + c;


}
