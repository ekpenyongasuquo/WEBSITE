//Looping in array
let prices = [5, 6, 7, 8, 30];
for (let i = 0; i < prices.length; i += 1) {
    console.log(prices[i]);
}

// Iterate backward
//for (let i = prices.length - 1; i >= 0; i-= 0) {
//   console.log(prices[i]);

//}

//Using for of

let fruits = ["banna", "apple", "orange"];
for (let fruit of fruits) {
    console.log(fruit);

}

// Sorting alphabetically
fruits = fruits.sort();
console.log(fruits);


//Using chainning methe we can sort in reverse
fruits = fruits.sort().reverse();
console.log(fruits);

//2D array: Array of arrays
let fruitsCrop = ["apples", "mangos", "bannas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chickens", "fishs"];



let goceryList = [fruitsCrop, vegetables, meats];
for (let list of goceryList) {
    for (let food of list) {
        console.log(food);
    }
}

//To replace element in meats array(to replace eggs for example)
goceryList[2][0] = "stockfish";
console.log(goceryList);

// Spread operation
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximun = Math.max(...numbers);
console.log(maximun);


let class1 = ["Mfon", "Ekpenyong", "Asuquo"];
let class2 = ["Efiong", "Etim", "Bassey"];
class1.push(...class2);
console.log(class1);

// Rest parameter
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
console.log(sum(a, b, c, d, e));
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total
}