
let mySym = Symbol('key')

let user = {
    name : "imtiaz",
    'full name' : "Imtiaz Ali",
    email : "junejo@gmail.com",
    age : 20,
    password : "*****",
    isLoggedIn : false,
    location : "Badin(Sindh)",
    lastLoginDays : ["monday", "friday"],
    [mySym] : "key"
}

console.log(user);

// there are two methods to access the object values...
console.log(user.name);
console.log(user["name"]);

user.name = 'Abdullah'
user.age = 21
console.log(user);

// there is such to access the fullname and mySym without using bracket method.
console.log(user["full name"]);

console.log(user[mySym])
console.log(typeof user[mySym]);
console.log(typeof mySym);

// Freeze()

user.email = "nizamani@gmail.com"
// Object.freeze(user)                 // after using this method you can not make any changes in object.
// user.email = "imtiaz@gmail.com"
// console.log(user);
 
user.greeting = function() {
    console.log("Hello Welcome")
}

user.greetingUser = function() {
    console.log(`Hellow welcome , ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingUser());


let result = user.greeting() // it show undefined because this method dosn't return anything.
console.log(result);