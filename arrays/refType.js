// string, number. bool, undefined, null, symbol, bigint
// let user1 = "Anton"
// let user2 = user1
//
// console.log(user1)
// console.log(user2)
// console.log("-----------------------")
//
// user1 = "Maria"
//
// console.log(user1)
// console.log(user2)
// console.log("-----------------------")

// array object

// const usersList1 = ["Anton", "Maria"]
// const usersList2 = usersList1
//
// console.log(usersList1)
// console.log(usersList2)
// console.log("-----------------------")
//
// usersList1[0] = "Andrii"
// // usersList1 = ["Peter"]
//
// console.log(usersList1)
// console.log(usersList2)
// console.log("-----------------------")


// const usersList1 = ["Anton", "Maria"]
// const usersList2 = structuredClone(usersList1)
//
// console.log(usersList1)
// console.log(usersList2)
// console.log("-----------------------")
//
// usersList1[0] = "Andrii"
//
// console.log(usersList1)
// console.log(usersList2)
// console.log("-----------------------")

// OLD

// const usersList1 = ["Anton", "Maria"]
// const usersList2 = JSON.parse(JSON.stringify(usersList1))
// console.log(usersList2)
// console.log(typeof usersList2)


//

// const usersList1 = [["Anton","Maria"], ["Peter","Yves"]]
// const usersList1 = ["Peter","Yves"]

// const usersList2 = []

// for (let i = 0; i < usersList1.length; i++) {
//     if (typeof  usersList1[i] === 'object'){
//         usersList2[i] = JSON.parse(JSON.stringify(usersList1[i]))
//     }
//     usersList2[i] = usersList1[i]
// }
//
// console.log(usersList1)
// console.log(usersList2)
// console.log("-----------------------")
//
// usersList2[0][0] = "OLOLOLO"
//
// console.log(usersList1)
// console.log(usersList2)
// console.log("-----------------------")