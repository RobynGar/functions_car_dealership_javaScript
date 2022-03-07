

// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock.

// this is needed as i need to be able to add a car to my stock in one of the methods
const Car = require("./car");

// this is the constructor for dealership 
const Dealership= function(name, maxCars, stock = []){
    this.name = name;
    this.maxCars = maxCars;
    this.stock = stock;
}


// count cars in stock
Dealership.prototype.countCar = function(){
    // i want to get the stock from whatever dealership so
    // i refer back to the constructor and ask for the length
    // of the stock array using .length and store it in a variable
    let getStock = this.stock.length
    // i then return this variable
    return getStock;
    
}


// add car to stock
// i want this prototype to accept a Car from the car class as a 
// argument so pass it through the () with the Capital C on car meaning 
// i an referring to the object car i have made in car.js
Dealership.prototype.addCar = function(Car){
    // i want to get the stock from whatever dealership so
    // i refer back to the constructor with the this.
    let findStock = this.stock
    // i then want to add a car object to this stock array
    findStock.push(Car);
   
}

// Return an array containing each car's manufacturer
Dealership.prototype.carsManufacturer = function(stock){
    
    
}
// this allows other classes to access what i have written in 
// this class to make dealerships and un=se its created methods
module.exports = Dealership;