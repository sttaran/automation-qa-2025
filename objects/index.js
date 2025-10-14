// const user = {
//     name: "Alice",
//     age: 35,
//     isMarried: false,
//     hobbies: ["volleyball", "chess"],
//     address: {
//         personalAddr: {
//             street: "Lorem Ipsum",
//             city: "London",
//         },
//         workAddress: {
//             street: "Berlin Ipsum",
//             city: "Berlin",
//         }
//     }
// }
//
// console.log(user.address.workAddress.city)
// console.log(user["address"]["workAddress"]["city"])

// const permissions = ["read_article", "write_article"]; // fetch manager permissions via API
// const user = {
//     name: "Peter",
//     "last name": "Parker",
//     permissions: {
//         read_article: 1,
//         write_article: 1,
//     }
// }
//
// console.log(user["last name"])
//
// for (const permission of permissions) {
//     if (!user.permissions[permission]) {
//         throw new Error(`Permission "${permission}" not found`)
//     }
// }

// console.log(user.hobbies[0])
// console.log(user["hobbies"][0])

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// const user2 = new User();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// const john = new Person("John", 30);

const user = {
  name: 'Peter',
  age: 30,
  permissions: {
    read_article: 1,
    write_article: 1,
  },
};

user.name = 'Anton';
user.permissions.read_article = 0;
user.permissions.add_members = 1;

delete user.age;

console.log(JSON.stringify(user, null, 2));
