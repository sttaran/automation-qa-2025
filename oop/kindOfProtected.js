class Animal {
  _name;
  constructor(name) {
    this._name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

const dog = new Dog('Rex');
console.log(dog);

// class Animal {
//     #name
//     constructor(name) {
//         this.#name = name;
//     }
// }
//
// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
//
//     get dogName() {
//         return this.#name
//     }
// }
//
// const dog = new Dog("Rex")
// console.log(dog.dogName);
