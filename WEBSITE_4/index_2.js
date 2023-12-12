/* 
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if (fruit.cheched) {
        console.log(fruit.value);
    }
});
*/



/*
let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "lightgray";
*/

let vegetables = document.querySelectorAll("li");
vegetables.forEach(vegetable => {
    vegetable.style.backgroundColor = "lightgray";


});

