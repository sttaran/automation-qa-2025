const user = {
    name: "Peter",
    age: 30,
    greet: function (name){
        console.log(`Hello ${name}, I am ${this.name}!`)
    },
    printFriendList: function (){
       console.log(`My ${this.friends.length > 1 ? "friends are" : "friend is"} ${this.friends.join(", ")}.`)
    },
    friends: [],
    addFriend: function (friendName){
        this.friends.push(friendName)
    }
}

user.greet("Anton")
user.addFriend("Anton")
user.addFriend("Alice")
user.printFriendList()