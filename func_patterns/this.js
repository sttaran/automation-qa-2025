// global this undefined
// console.log(this)

// object context

// const person = {
//     name: 'Alice',
//     printThis: function () {
//         console.log(this)
//     },
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
//
// const person2 = {
//     name: 'Peter',
//     printThis: function () {
//         console.log(this)
//     },
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
//
// // person.printThis();
// // person.greet();
//
// const myGreet = person.greet.bind(person2);
// // myGreet.call(person)
// person2.greet();
// myGreet()

// const myGreet = person.greet
// myGreet()


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     greet() {
//         console.log(`Hello, ${this.name}!`);
//     }
// }
//
// const alice = new Person("Alice");
// alice.greet();
// const peter = new Person("Peter");
// peter.greet();

const person = {
    name: 'Alice',
    greet: () =>{
        console.log(`Hello, ${this.name}!`);
    }
};