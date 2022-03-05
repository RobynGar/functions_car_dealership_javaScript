// Add methods to Dealership to:
// Count the number of cars in stock
// Add a car to stock
// Return an array containing each car's manufacturer
// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock.

const Dealership= function(name, maxCars){
    this.name = name;
    this.maxCars = maxCars;
    this.stock = 0;
}

Dealership.prototype.countCarStock =function(stock){
    
}

module.exports = Dealership;