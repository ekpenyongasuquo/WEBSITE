let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d"); i


context.font = "50px MV Boli";
context.fillStyle = "gray";
context.textAlign = "center";
context.fillText("You Win!", canvas.width / 2, canvas.height / 2);