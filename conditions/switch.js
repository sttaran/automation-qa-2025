const personAge = 17;

// if (personAge < 10) {
//     console.log("It's a kid");
// } else if (personAge <=14 && personAge >=10) {
//     console.log("It's minor")
// } else if (personAge > 14 && personAge < 18){
//     console.log("It's teenager")
// }else {
//     console.log("It's an adult")
// }


switch (true) {
    case personAge < 10:
        console.log("It's a kid");
        break;
    case personAge <=14 && personAge >=10:
        console.log("It's minor")
        break;
    case personAge > 14 && personAge < 18:
        console.log("It's teenager")
        break;
    default:
        console.log("It's an adult")
}

const userSubscriptionPlan = "Free"

switch (userSubscriptionPlan) {
    case "Pro":
        console.log("Pro access");
        break;
    case "Business":
        console.log("Super access");
        break;
    default:
        console.log("Limited access")
}



// switch (personAge) {
//     case 1:
//     case 2:
//         console.log("kid")
//         break;
//     case 18:
//     case 21:
//         console.log("adult")
//         break;
//     default:
// }





// const personAge = 7;
// let giftCount = 0;
//
// switch (true) {
//     case personAge < 10:
//         giftCount = giftCount + 1
//     case personAge < 14:
//         giftCount = giftCount + 1
//     case personAge  < 18:
//         giftCount = giftCount + 1
//         break;
//     default:
//         console.log("no gifts")
// }

// console.log("Total gifts: ", giftCount);