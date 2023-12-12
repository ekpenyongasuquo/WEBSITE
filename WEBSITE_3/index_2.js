// setTimeout() = Invokes a function after a number of milliseconds
// asynchronous function(does not pause execution)

let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage() {
    alert("I will going home by 5pm");
}
function secondMessage() {
    alert("I hardly go by before 4pm");
}
function thirdMessage() {
    alert("This will be interesting!");
}
document.getElementById("myButton").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Thank for your patience");
}

// setInterval() = Invokes a function repeatedly after number of milliseconds 
//asynchronous function (doesn't pause execution)
let count = 0;
let max = window.prompt("Count up what number: ");
max = Number(max);

const myTimer = setInterval(countUp, 1000);
function countUp() {
    count += 1;
    console.log(count);
    if (count >= max) {
        clearInterval(myTimer)
    }
}