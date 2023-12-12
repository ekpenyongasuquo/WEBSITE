
//const element = document.getElementById("myButton");
//element.onclick = doSomething;

//const element = document.body;
//element.onload = doSomething;


//const element = document.getElementById("myText");
//element.onchange = doSomething;


const element = document.getElementById("myDiv");
element.onmouseover = doSomething;
element.onmouseout = doSomethingElse;


function doSomething() {
    //alert("You did something");
    element.style.backgroundColor = "red";
}
function doSomethingElse() {
    //alert("You did something");
    element.style.backgroundColor = "lightgreen";
};
