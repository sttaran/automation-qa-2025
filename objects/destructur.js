// const user = {
//     name: "John",
//     role: "manager",
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };
//
// // const userRole = user.role;
// // console.log(userRole);
//
// const {role: userRole} = user
// console.log(userRole);


// const user = {
//     name: "John",
//     role: "admin",
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };
//
// const { name, role = "user" } = user;
// console.log(name);
// console.log(role);

// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 }
// ];
//
// for (const person of people) {
//     console.log(`${person.name} is ${person.age} years old`);
// }
//
// for (const {age, name} of people) {
//     console.log(`${name} is ${age} years old`);
// }

const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

// const city = person.address.city;
// const country = person.address.country

// const {address : {city, country}} = person;
// console.log(city);
// console.log(country);

// const numbers = [1, 2, 3];
//
// const [first, , third] = numbers;
// console.log(first);
// // console.log(second);
// console.log(third);

let a = 1;
let b = 2;

[a, b] = [b,a]

console.log(a);
console.log(b);