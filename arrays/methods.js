// const sentence = "Це речення має кілька слів";
// const words = sentence.split(" ")
// console.log(words);
//
// const newSentence = words.join("_")
// console.log(newSentence);

// const fruits = ["яблуко", "банан", "полуниця"];
//
// const fruitString = fruits.join(", ");
//
// console.log(fruitString); // "яблуко, банан, полуниця"

// const fruits = ["яблуко", "банан", "полуниця"];
// console.log(fruits.indexOf("ololoo"));
// console.log(fruits.includes("банан"));

// fruits.push("mango")
// console.log(fruits)
// const lastEl = fruits.pop()
// console.log(lastEl)
// console.log(fruits)

// fruits.unshift("mango")
// console.log(fruits)
// const firstEl = fruits.shift()
// console.log(firstEl)
// console.log(fruits)


const fruits = ["яблуко", "банан", "полуниця"];
// const someFruits = fruits.slice(1)
// console.log(someFruits)

// fruits.splice(1, 2) // delete
// fruits.splice(1, 1, "mango", "berry") // delete and insert
// const fruitsCopy = structuredClone(fruits);
// fruitsCopy.splice(1, 1, "mango") // replace
// fruitsCopy.splice(1, 0, "mango") // add
// console.log(fruitsCopy);



const array1 = [1, 2];
const array2 = [3, 4];

const concatenatedArray = array1.concat(array2);
const concatenatedArray2 = [...array1, ...array2];
console.log(concatenatedArray); // [1, 2, 3, 4]
console.log(concatenatedArray2); // [1, 2, 3, 4]