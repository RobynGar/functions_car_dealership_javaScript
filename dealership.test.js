const Dealership = require("./dealership");
const Car = require("./car");

describe ("dealership tests", function(){

    test ("can count cars in stock", () => {
    
    const car = new Car ("Honda", 20_000, "petrol");
    const dealershipTest = new Dealership("test", 5, [car]);
    
        actual = dealershipTest.countCar; 
        expected = 1;
        expect(actual).toBe(expected);
    
    
    });
    
    
    });