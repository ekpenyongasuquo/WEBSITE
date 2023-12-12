// Canvas = a means for drawing graphics used for animations, games, data visualization
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

/*

context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.moveTo(500, 500);
context.lineTo(250, 250);
context.moveTo(0, 500);
context.lineTo(250, 250);
context.moveTo(250, 0);
context.lineTo(250, 250);
context.moveTo(0, 250);
context.lineTo(250, 250);
context.moveTo(500, 250);
context.lineTo(250, 250);
context.stroke();
context.stroke();
context.stroke();

*/
//Draw a triangle
context.fillStyle = "red";
context.lineWidth = 6;
context.strokeStyle = "red";
context.beginPath();
context.moveTo(500, 250);
context.lineTo(0, 250);
context.moveTo(250, 0);
context.lineTo(0, 250);
context.moveTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();