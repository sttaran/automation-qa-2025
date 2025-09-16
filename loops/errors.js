const userAge = 17

// if (userAge >= 18) {
//     console.log("User is adult")
// } else {
//     throw new Error("GO HOME CHILD!!!")
// }


try {
    if (userAge >= 18) {
        console.log("User is adult")
    } else {
        throw new Error("GO HOME CHILD!!!")
    }
} catch (error) {
    console.log("Error handled: ", error.message)
}finally {
    console.log("Finally always works")
}

console.log("END OF PROGRAM")