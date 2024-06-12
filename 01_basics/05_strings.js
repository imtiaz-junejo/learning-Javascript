let name = "Imtiaz"
let age = 20

// console.log("Hi "+ name + " your age is "+ age); // this is not recommended.
// console.log(`Hi ${name}, your age is ${age}.`);  // this is the latest syntax for string.

let str = new String("Imtiaz")

// console.log(str.__proto__);   

// Replace method...
const replace = str.replace("a", "aa")   // Replaces occurrences of a substring or regular expression with a new substring.
console.log(replace);

// Repeat method...
const repeat = str.repeat(3)  //  Returns a new string with a specified number of copies of the string it was called on.
console.log(repeat);

// Length property...
const length = str.length      // Returns the length of a String object.
console.log(length);

//  CharAt method...
const char = str.charAt(3)    // Returns the character at the specified index
console.log(char)

// Concat method...
const concat = str.concat(" Ali", " junejo")  // Joins two or more strings and returns a new string.
console.log(concat);

// EndsWith method...
const isEnding = str.endsWith("z") // Determines whether a string ends with the characters of a specified string. 
console.log(isEnding);             // return either ture or false.

// Includes method...
const isInclude = str.includes("mt")  // Determines whether a string contains the characters of a specified string.
console.log(isInclude)                // return either ture or false.

// IndexOf()
const indexOf = str.indexOf('t')      // Returns the position of the first occurrence of a specified value in a string.
console.log(indexOf);

// LastIndexOf()
const lastIndexOf = str.lastIndexOf('a')  // Returns the position of the last occurrence of a specified value in a string.
console.log(lastIndexOf)


//  ---------------- Slice ------------
let slice = str.slice(2)
    slice = str.slice(0,5)       // Extracts a section of a string and returns it as a new string.
console.log(slice);

//  ---------------- Slice ------------
let split = str.split(2)
    split = str.split(0,3)       // Extracts a section of a string and returns it as a new string.
console.log(split);

