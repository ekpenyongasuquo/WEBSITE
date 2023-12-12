//Constructor = a special method of a class accept argument and assigns properties

class student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}
const student1 = new student("Mfon", 30, 4.0);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);


//Static = belongs to the class, not the objects
//Properities = useful forcaches, fixed - configuration
//Methods = useful for utility function
class Car {
    static numberOfCars = 0;
    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace() {
        console.log("1,2,3...Go!");
    }
}
const Car1 = new Car("Mustang");
const Car2 = new Car("Toyota");
const Car3 = new Car("Jeep");
const Car4 = new Car("BMW");
const Car5 = new Car("Fareri");
const Car6 = new Car("Benz");
console.log(Car.numberOfCars);
Car.startRace();