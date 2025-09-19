

// function printGreeting(name){
//     console.log(`Hi ${name}!`)
// }
//
//
// const userName = "John"
// printGreeting(userName)


// function printGreeting(age, name = "Anonymous"){
//     console.log(`Hi ${name}! Your age is ${age}!`)
// }
//
// const userName = "John"
// printGreeting(18, userName)


// function calculateSum(...nums) {
//    let sum = 0
//
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i]
//     }
//
//     return sum
// }
//
// // console.log(calculateSum(1,2,3))
// // console.log(calculateSum(1))
// // console.log(calculateSum(1,9))
// console.log(calculateSum(1,9,1))


// const calculateSum = (...nums) =>{
//    let sum = 0
//
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i]
//     }
//
//     return sum
// }

// const calculateSum = (...nums) => nums.reduce((sum, num) => sum + num, 0);



// console.log(calculateSum(1,9,1))



// function printPersonalInfo(name, grade, ...additionalInfo) {
//     console.log(`It's ${name} from ${grade} , additionalInfo: ${additionalInfo.join(',')}`)
// }
//
// printPersonalInfo("Stanisalv", "12A", "loves basketball", "plays chees")

// function calculateSum() {
//     let sum = 0
//
//     for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i]
//     }
//
//     return sum
// }
//
// console.log(calculateSum(1,2,3))

// const calculateSum = () => arguments.reduce((sum, num) => sum + num, 0);
// console.log(calculateSum(1,2,3))

// function printUserInfo({name, age}){
//     console.log(`Hi ${name}! ${age}`)
// }

// printUserInfo({name: "John", age: 15})