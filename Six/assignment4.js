// (A) Lucas and Petter are trying to compare their BMI (Body Mass Index), which is calculated using the
formula:

let lucas = 78/(1.69*1.69);
let BMI1 = lucas;
let petter = 92/(1.95*1.95);
let BMI2 = petter;

console.log(BMI1);
console.log(BMI2);

if(BMI1 > BMI2){
    console.log("Lucas has a  bigger BMI!")
}else{
    console.log("Petter is making BMI gains")
}

// (B) The Temperature Converter - Let's make a converter based on the steps here and display the coverted result. -Use template literals Only to display the result

let celsius = 20;
let celsius_to_fahren = (celsius * 1.8) + 32;
let celsius_results = celsius_to_fahren;
console.log(`${celsius}°C is ${celsius_results}°F`)

let fahrenheit = 95;
let fahren_to_celsius = (fahrenheit - 32) * 0.5556;
let fahren_results = fahren_to_celsius;
console.log(`${fahrenheit}°F is ${fahren_results}°C`);

// (C)Use the BMI example from part A, and the code you already wrote, and improve it:

const name1 = "Lucas";
const name2 = "Petta";

let height1 = 1.69;
let height2 = 1.95;

let weight1 = 78;
let weight2 = 92;

let lucasHigherBMI = weight1 / (height1 * height1);
let pettaLowerBMI = weight2 / (height2 * height2);

lucasHigherBMI && pettaLowerBMI ? console.log(`${name1}'s BMI of ${lucasHigherBMI} is higher than ${name2}'s , which is ${pettaLowerBMI}.`) : console.log(`${name2}\'s BMI is higher than ${name1}'s`);

// (D)Create 2 functions (Arrow Function Preferred) to convert temperature:
/* Arrow Functions  */


CovertCelsiusToFahrenheit = (celsius) => {
    let temperature = (celsius * 1.8) + 32;
    return `${celsius}°C is ${temperature}°F`;
 }
 
 console.log(CovertCelsiusToFahrenheit(100));
 console.log(CovertCelsiusToFahrenheit(0));
 console.log(CovertCelsiusToFahrenheit(10));
 
 CovertFahrenheitToCelsius = (fahrenheit) => {
    let temperature = (fahrenheit - 32) * 0.5556;
    return `${fahrenheit}°F is ${temperature}°C`;
 }
 console.log(CovertFahrenheitToCelsius(32));
 console.log(CovertFahrenheitToCelsius(10));
 console.log(CovertFahrenheitToCelsius(102));