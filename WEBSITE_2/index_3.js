// Map = object that holdskey value pairs of any data type

const store = new Map([
    ["t-shirt", 29],
    ["jeans", 30],
    ["sock", 10],
    ["underwear", 50]
]);


// Using store.set method to add hat 
//let shoppingCart = 0;
//shoppingCart += store.get("t-shirt");
//console.log(shoppingCart);

//store.set("hat", 40); // Using store.set method to add hat 

//store.delete("hat", 40); // to delete a pair
console.log(store.has("hat")); // will return a boolean to check if hat is in the store
console.log(store.size); //check the size of your object in store

store.forEach((value, key) => console.log(` ${key} $${value}`));