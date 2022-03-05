// Add methods to Dealership to:
// Count the number of cars in stock
// Add a car to stock
// Return an array containing each car's manufacturer
// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock.

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
Dealership.prototype.addCar =function(stock, car){
    const stock = [];
    stock.push("car");
}

module.exports = Dealership;