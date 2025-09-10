const text = "I'm a string!";
// console.log(text[3]); // Виведе: "I"

// console.log(text.length);
// console.log("I'm a string!".length);


// const single = 'Stanislav'
// const double = "Stanislav"

// const name = 'Stanislav'

// const template = `My name is ${name}`
// const template2 = `My name is ${name} and my age ${Math.floor(Math.random() * 100)}`
// console.log(template)
// console.log(template2)

const name = 'Stanislav'
const template = `My name is ${name} ${name}`

// console.log(template.includes("Stas"))
console.log(template.replace("ololol", "Anonymous"))
// console.log(template.replaceAll(name, "Anonymous"))

if (!template.includes("ololol")) {
    throw new Error(`There is no required string`)
}else template.replace("ololol", "Anonymous")

