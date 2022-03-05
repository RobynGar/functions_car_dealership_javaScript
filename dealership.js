

// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock.

const Car = require("./car");

const Dealership= function(name, maxCars, stock = []){
    this.name = name;
    this.maxCars = maxCars;
    this.stock = stock;
}

// count cars in stock
Dealership.prototype.countCar = function(stock){
    const stock = [];
    console.log(stock.length);
    
}

// add car to stock
Dealership.prototype.addCar =function(stock, Car){
    const stock = [];
    stock.push("Car");
}

// Return an array containing each car's manufacturer
Dealership.prototype.carsManufacturer = function(stock){
    const carManufacturer = [];
    
}

module.exports = Dealership;