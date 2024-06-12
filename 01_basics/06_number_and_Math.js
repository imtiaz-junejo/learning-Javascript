
const num = 20000000       // this is our simple number.

const number = new Number(2000)   // but this is an object of a number
console.log(number);

console.log(number.toString().length);

console.log(num.toFixed(2))   // Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.

console.log(number.toExponential())  // Returns a string containing a number represented in exponential notation

console.log(num.toPrecision(5));    // Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
console.log(num.toPrecision(3));

console.log(num.toLocaleString("en-PK"));

let maxValue = Number.MAX_VALUE;
console.log(maxValue);

let minValue = Number.MIN_VALUE;
console.log(minValue);


// +++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-5));             // Returns the absolute value of a number(always a positive numbers).
console.log(Math.round(8.55));         // The value to be rounded to the nearest integer.
console.log(Math.ceil(2.33));          // Returns the smallest integer greater than or equal to its numeric argument
console.log(Math.floor(3.91));         // Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.min(2,5,8,3,0,6));    // Returns minimum value from an array
console.log(Math.max(2,5,8,3,0,6));    // Returns maximum value from an array

//------------------------ Random ----------------------

console.log(Math.random());         // Return a number between 0 and 1.               
console.log((Math.random() * 10));     // Shift one digit to left of decimal we multiply it by 10.
console.log((Math.random() * 10) + 1);    // to avoid 0 we add +1.
console.log(Math.floor(Math.random() * 10) + 1);  // Math.floor() returns only an integer value (round of all floating values). 


// Generate numbers in range 10 - 20.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - 10 + 1)) + min)




