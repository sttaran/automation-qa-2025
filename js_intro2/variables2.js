// let user;
// console.log(user);

// var user;
//
// console.log(user)
//
// user = "user1"


// global scope
// const user = "Stanislav"
//
// // block scope
// if (user === "Stanislav") {
//     const age = 12
//     var hobby = "Baseball"
//     console.log("Inside", hobby)
//     // console.log("Inside", age)
// }
// console.log("Outside", hobby)
// // console.log("Outside", age)


// functional scope
// function foo(){
//     if (user === "Stanislav") {
//         const age = 12
//         var hobby = "Baseball"
//         console.log("Inside", hobby)
//         // console.log("Inside", age)
//     }
//
//     console.log("Outside", hobby)
// }
//
// console.log("Outside2", hobby)


// block scope
const user = "Stanislav"

if (user === "Stanislav") {
    const age = 12
    console.log("Inside", age)

    if (true){
        const name = "John"
        console.log(age)
    }

    console.log("name", name)
}
