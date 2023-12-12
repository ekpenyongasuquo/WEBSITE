// Arrays of object
class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive() {
        console.log(`You drive this ${this.model}`);
    }
}

const car1 = new Car("Mostang", 2023, "Gold");
const car2 = new Car("Toyota", 2022, "Black");
const car3 = new Car("Indigo", 2023, "Gray");

const cars = [car1, car2, car3];
console.log(cars[0].model);
console.log(cars[0].year);
console.log(cars[0].color);

