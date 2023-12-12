// Get = binds an object property to a function when that property is accessed 
// getter improve the data scurity and you add additional logic to your program.

/*class Car {
    constructor(power) {
        this._power = power;

    }
    get power() {
        return `${this._power}hp`;
    }
}

const car = new Car(400);
console.log(car.power);
*/



//Set= binds an object property to a function when that property is assigned a value

class Car {
    constructor(power) {
        this._power = power;
        this._gas = 25;

    }
    get power() {
        return `${this._power}hp`;
    }
    get gas() {
        return `${this._gas}L ${this._gas / 50 * 100}%`
    }
    set gas(value) {
        if (value > 50) {
            value = 50;
        }
        else if (vale < 50) {
            value = 0;
        }
    }
}

const car = new Car(400);
car.gas = 500
console.log(car.power);
console.log(car.gas);
