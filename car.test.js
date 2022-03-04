const { expect } = require("@jest/globals");
const Car = require("./car");

describe ("car constructor", function(){

test ("can call the manufacturer", () => {

const car = new Car ("Honda", 20_000, "petrol")
    actual = car.manufacturer; 
    expected = "Honda";
    expect(actual).toBe(expected);


});


});