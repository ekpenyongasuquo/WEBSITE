document.getElementById("myButton").onclick = function () {

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");



    if (myCheckBox.checked) {

        console.log("You are subscribe!")
    }
    else {

        console.log("You are not subscribe")
    }
    if (visaBtn.checked) {
        console.log("You are paying with Visa Card");
    }
    else if (mastercardBtn.checked) {
        console.log("You paying with Master Card")
    }
    else if (paypalBtn.checked) {
        console.log("You are paying with Paypay")


    }
    else {
        console.log("No button was selected")
    }


}