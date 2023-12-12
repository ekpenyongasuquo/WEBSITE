/* let element = document.getElementsByClassName("desserts");
element[0].style.backgroundColor = "lightblue";
*/

let desserts = document.querySelectorAll(".desserts");
desserts.forEach(dessert => {
    dessert.style.backgroundColor = "lightblue";
})


