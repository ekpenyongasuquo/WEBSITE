
/*
let element = document.querySelector("#vegetables");
let sibling = element.nextElementSibling;
sibling.style.backgroundColor = "gold";
*/

/*
let element = document.querySelector("#vegetables");
let sibling = element.previousElementSibling;
sibling.style.backgroundColor = "gold";
*/

/*
let element = document.querySelector("#fruits");
let child = element.firstElementChild;
child.style.backgroundColor = "gold";
*/

/*
let element = document.querySelector("#fruits");
let parent = element.parentElement;
parent.style.backgroundColor = "gold";
*/

/*
let element = document.querySelector("#fruits");
let child = element.children[1];
child.style.backgroundColor = "gold";
*/

let element = document.querySelector("#desserts");
let children = Array.from(element.children);
children.forEach(child => {
    child.style.backgroundColor = "gold";

});
