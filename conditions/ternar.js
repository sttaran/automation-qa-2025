const personAge = 17

const isAdult  = personAge >= 18
                          // умова ? виконується умова: не виконується умова
const accessLevel = isAdult ? "Full" : "Limited"

// let accessLevel

// if(isAdult){
//     accessLevel = "Full"
// }else{
//     accessLevel = "Limited"
// }

console.log(accessLevel)