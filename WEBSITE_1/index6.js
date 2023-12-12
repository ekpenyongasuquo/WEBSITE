const answer = Math.floor(Math.random() * 10 + 1);
let guesess = 0;
document.getElementById("submitButton").onclick = function () {
    let guess = document.getElementById("guessField").value;
    guesess += 1;
    if (guess == answer) {
        alert(`${answer} is the #. It took you ${guesess} guesess`);
    }
    else if (guess < answer) {
        alert("Too small");
    }
    else {
        alert("Too Large");
    }
}