const myDivOne = document.getElementById("myDivOne");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;

function move(event) {
    switch (event.key) {
        case "ArrowDown":
            y += 5;
            myDivOne.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= 5;
            myDivOne.style.top = y + "px";
            break;
        case "Arrowright":
            x += 5;
            myDivOne.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 5;
            myDivOne.style.left = x + "px";
            break;
        default:
            break;
    }
}