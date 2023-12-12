const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDivTwo");


myButton.addEventListener("click", begin);
function begin() {
    let timeId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timeId = setInterval(frame, 5);
    function frame() {
        if (x >= 200 || y >= 200) {
            clearInterval(timeId);
        }
        else {
            degrees += 5;
            x += 1;
            y += 1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            myAnimation.style.transform = "rotateZ(" + degrees + "deg)";

        }
    }
}