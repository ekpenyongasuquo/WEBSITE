//Super = Refers to the parent class. Commonly use to invoke constructor of a parent class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal {

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}
const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 50);
const hawk = new Hawk("hawk", 1, 100);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);