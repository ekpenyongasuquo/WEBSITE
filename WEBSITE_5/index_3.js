//Draw square

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");



context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10;

context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();

context.fill();

