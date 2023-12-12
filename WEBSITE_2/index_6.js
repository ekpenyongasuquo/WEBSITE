//Inheritance = a class can inherit all the method and properities from another class
class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);

    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal {
    name = "rabit";
    run() {
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal {
    name = "fish";
    swim() {
        console.log(`This ${this.name} is swiming`);
    }
}
class Hawk extends Animal {
    name = "hawk";
    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();