const users = [
    {
        name: "Peter",
        age: 30,
        permissions: {
            read_article: 1,
            write_article: 1,
        }
    },
    {
        name: "Anton",
        age: 30,
        permissions: {
            read_article: 0,
            write_article: 1,
        }
    },
    {
        name: "Andrii",
        age: 30,
        permissions: {}
    },
    {
        name: "Alice",
        age: 30
    }
]

// for (const user of users) {
//     const readPermission = user.permissions?.read_article
//     if (readPermission === 1) {
//         console.log(`read permission granted for user ${user.name}`)
//     }else {
//         console.log(`read permission NOT granted for user ${user.name}`)
//     }
//     // console.log(user.name, user.permissions?.read_article)
// }

const calculator = {
    add: function (a, b) {
        return a + b;
    }
};

// З оператором опціонального доступу
// const resultOptional = calculator.operations?.add(5, 3);
// console.log(resultOptional);


// const user = {
//     name: "John",
//     // address: {
//     //     city: "New York",
//     //     zipcode: "10001"
//     // }
// };
//
// // Без оператора опціонального доступу
// const city = user && user.address && user.address.city;
// console.log(city);
//
// // З оператором опціонального доступу
// const cityOptional = user?.address?.city;
// console.log(cityOptional);

const user = {
    name: "John",
    role: "manager",
    address: {
        city: "New York",
        zipcode: "10001"
    }
};

const userRole = user.role ?? "user"
console.log(userRole);