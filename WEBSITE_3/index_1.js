// Anonymous object = objects without a name. Not directly referenced.
// Less syntax. No need for unique names.

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}
let cards = [new Card("A", "Hearts"),
new Card("A", "Spades"),
new Card("2", "Clubs")];

console.log(cards[1].value + cards[1].suit);
cards.forEach(card => console.log(`${card.value} ${card.suit}`));

// Object with a description something went wrong. Can't open file, lose connection, user types correct input, typeerror

try {
    console.log();
}
catch (error) {
    console.log(error);
}

// Throw: executes a user defined error
try {
    let x = window.prompt("Enter a Number: ");
    x = Number(x);
    console.log(`${x} is a number`);
}
catch (error) {
    console.log(error);
}
finally {
    console.log("This always executes");
}