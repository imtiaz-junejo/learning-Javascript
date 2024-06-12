
// const myUser = new Object()
const myUser = {}

console.log(myUser);

myUser.id = "123"
myUser.name = "safdar"
myUser.isLoggedIn = false

console.log(myUser);

const regularUser = {
    email : "safdar@gmail.com",
    fullname : {
        UserFullname : {
            firstName : "Safdar",
            lastName : "Arain"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
console.log(regularUser.fullname.UserFullname.firstName);


console.log('---------------------------------------------------------------------------------------------------');

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2)

const obj5 = {...obj1, ...obj2, ...obj3}

console.log(obj4)
console.log(obj5)


console.log(Object.keys(myUser));
console.log(Object.values(myUser));
console.log(Object.entries(myUser));

console.log(myUser.hasOwnProperty('isLoggedIn'));



const users = [
    {
        id : "123",
        email : "sample@gmail.com"
    },
    {
        id : "123",
        email : "sample@gmail.com"
    },
    {
        id : "123",
        email : "sample@gmail.com"
    },
    {
        id : "123",
        email : "sample@gmail.com"
    },
    {
        id : "123",
        email : "sample@gmail.com"
    }
]

console.log('---------------------------------------------------------------------------------------------------');

console.log(users[0])
console.log(users[1].email);
console.log(users[2].id)


console.log('---------------------------------------------------------------------------------------------------');


// --------------------------- Object Destructuring --------------------------

const course = {
    courseName : "javascript",
    price : 999,
    courseInstructor : "Hitesh"
}

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);
