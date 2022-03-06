const Dealership = require("./dealership");
const Car = require("./car");

const honda = new Car ("Honda", 20_000, "petrol");
const mini = new Car ("mini", 25_000, "electric");

const dealersWheels = new Dealership("Dealers Wheels", 5, [honda]);
dealersWheels.stock.push(mini);
console.log(dealersWheels);
let countDW = dealersWheels.stock.length;
console.log(countDW);


console.log(dealersWheels.countCar);