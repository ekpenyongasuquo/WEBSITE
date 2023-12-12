const myButton = document.querySelector("#myButton");


//myButton = addEventListener("click", () => window.open("http://google.com"));

//myButton = addEventListener("click", () => window.close());

//myButton = addEventListener("click", () => window.print());

let age = window.prompt("Enter your age:");
if (age < 18) {
    window.alert("You must be 18 and above to visit this site");
    window.close();
}
