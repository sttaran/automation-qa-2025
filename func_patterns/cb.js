// const isAdult = (age) => age >= 18;

// const isAdult = function (age) {
//     return age >= 18;
// };
//
// isAdult(20); // true

// Callback functions

// function processPayment(amount, balance){
//     if (balance < amount){
//         console.log("Balance should be equal or bigger than amount");
//         return;
//     }
//
//     console.log("Operation successful");
// }

function printFail(){
    console.log("payment failed")
}

function printSuccess(){
    console.log("payment was successful")
}

function processPayment(amount, balance, onFailure, onSuccess){
    if (typeof onFailure !== "function" || typeof onSuccess !== "function"){
        return
    }

    if (balance < amount){
        onFailure()
        return;
    }

    onSuccess()
}

processPayment(111,11, printFail, printSuccess)

// const printSomething = (amount)=> console.log(amount)
//
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].forEach((amount)=> console.log(amount));
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].forEach(printSomething);