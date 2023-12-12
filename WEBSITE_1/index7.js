document.getElementById("submitButton").onclick = function () {
    let tremp;
    if (document.getElementById("cButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "0C";

    }
    else if (document.getElementById("fButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "0F";
    }
    else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}





let temp = 32;
temp = toFahrenheit(temp);

function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}
function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}