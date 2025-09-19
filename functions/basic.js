
// function printSum(num1, num2) {
//     console.log(num1 + num2)
// }
//
// printSum(1,2)
// printSum(2,5)


function calculateSum(num1, num2) {
   // const result = num1 + num2
   // return result
    return (num1 + num2)
}

// const sum1 = calculateSum(5,11)
// const sum1 = calculateSum(Math.random(),Math.random())

// console.log("sum1: ", sum1)


// const sum1 = calculateSum(5,11)
//
// console.log("sum1: ", sum1)

printGreetingDeclaration("Stas")
// printGreetingExpression("Stas")

// function declaration
function printGreetingDeclaration(name){
    console.log(`Hi ${name}!`)
}

// function expression
const printGreetingExpression =  function (name){
    console.log(`Hi ${name}!`)
}

// arrow function
const  printGreetingArrow = (name)=> {
    console.log(`Hi ${name}!`)
}

// concise arrow function
const  printGreetingArrowC = (name)=> console.log(`Hi ${name}!`)

