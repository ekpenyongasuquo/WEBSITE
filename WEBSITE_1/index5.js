let width;
let height;
let area;

width = window.prompt("Enter the width ");
height = window.prompt("Enter the height ");
area = getArea(width, height);
console.log("The area of the rectangle is:", area);

function getArea(width, height) {
    let result = width * height;
    return result;


}