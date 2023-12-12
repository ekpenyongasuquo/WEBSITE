//Object= Agroup of properities and methods.
//properities = What an object has
//methods = What an object can do
// use . to access properities/methods
//Object Orientate Programming
/*const car = {
    model: "mustang",
    color: "red",
    year: 2023,

    drive: function () {
        console.log("You drive the car");
    },
    brake: function () {
        console.log("You step on the brake");
    }
}
console.log(car.model);
console.log(car.color);
console.log(car.year);


car.drive();
car.brake();
*/
const car2 = {
    model: "Toyota",
    color: "gold",
    year: 2022,

    move: function () {
        console.log(`You drive the ${this.model}`);
    }
}

car2.move();

// Class = a blueprint creating object define what properities
// and methods they have use a constructor for unique properities

class player {
    score = 0;
    pause() {
        console.log("You paused the game");
    }
    exist() {
        console.log("You have existed the game");
    }
}

const player1 = new player();
player1.score += 1;
console.log(player1.score);
player1.pause();
player1.exist();


