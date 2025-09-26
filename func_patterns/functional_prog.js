// let age = 17
//
// function doSomething(age){
//     console.log(age)
// }

// const numbers = [1,2,3,5,78]
//
// for (let i = 1; i <= numbers.length; i++) {
//     console.log(numbers[i])
// }
//
// numbers.forEach(n => console.log(n))


// recursion
// function foo (){
//     foo()
// }

// foo()

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
//
// console.log(factorial(5)) // 5 * 4 * 3 * 2 * 1


// const add = (a, b) => a + b;
// add(3, 4);

// const add = a => {
//     return b => {
//         return a + b;
//     };
// };
// const add2 =  add(2)
// console.log(add2(5))

const range = (a, b) => a > b ? [] : [a, ...range(a+1, b)];
const multiply = arr => arr.reduce((p, a) => p * a);
const factorial = n => multiply(range(1, n));

factorial(5)
