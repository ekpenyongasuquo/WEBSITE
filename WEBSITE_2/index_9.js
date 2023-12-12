//Passing object to function
class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mostang", 2023, "Gold");
const car2 = new Car("Toyota", 2022, "Black");
const car3 = new Car("Indigo", 2023, "Gray");

changeColor(car2, "Purple");
displayInfo(car2);

function displayInfo(car) {
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color) {
    car.color = color;
}