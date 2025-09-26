// function makeCounter() {
//     let counter = 0
//     // counter++;
//
//     return function() {
//         console.log(counter)
//         counter++;
//     }
// }
//
//
// const count = makeCounter()
// count()
// count()
// count()

function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = multiplier(2);

console.log(double(5));
console.log(double(8));

// const triple = multiplier(3)
// console.log(triple(8));
// console.log(triple(8));


// function getMagicNumberGenerator(factor) {
//     let multiplier = factor
//
//     return function(x) {
//         multiplier++
//         return x * multiplier;
//     };
// }
//
// const generator = getMagicNumberGenerator(1)
// console.log(generator(2))
// console.log(generator(2))
