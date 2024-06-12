
const arr = [1,2,3,4,5]
console.log(arr);

const myFriends = ['abdullah', 'safdar', 'mian']
console.log(myFriends);

let arr2 = [1, 'imtiaz', true, 99.9]
console.log(arr2);

// -------------------- Array methods -----------------

// Push()
console.log(arr.push(6), 'length');          // add element at last and then return the length.
console.log(arr);

// Pop()
console.log(arr.pop(), 'removed');
console.log(arr);

console.log('-------------------------');

// Unshift()
console.log(arr.unshift(7), 'length');  // add element at first and then return the length.
console.log(arr);

// Shift()
console.log(arr.shift(), 'removed');
console.log(arr);

console.log('--------------------------');

// Slice()
let array = [1,3,5,7,9,11]
console.log('A', array);

console.log(array.slice(1,4))      // this give us the part of the array but not changed the original one.
console.log('B', array);           // and the last index is not included.

// Splice()
console.log(array.splice(1,4))      // this also give us the part of the array but but it changed the original one.
console.log('C', array);            // and in this last index is included.

console.log('------------------------------------------------');

let myArray = [2,4,6,8,10]

// Includes()
console.log(myArray.includes(6))  // it returns a boolean value.

// IndexOf()
console.log(myArray.indexOf(8))   // it simply returns the index of the element.


let newArr = myArray.join()    // this returns a string of array.
console.log(newArr); 
