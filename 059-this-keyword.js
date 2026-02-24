// 1: WHAT IS 'THIS'?
// const person = {
//     name: 'Sarah',
//     greet: function(){
//         console.log('Hello, my name is ' + this.name);
//     }
// }

// const greetFn = person.greet;
// greetFn() // // "Hello, my name is undefined"

// 2: THE FOUR BINDING RULES
// 3: DEFAULT BINDING
// function showThis() {
//   console.log(this);
// }

// showThis(); // In browser: Window object

// 'use strict'

// function showThisStrict() {
//   console.log(this);
// }

// showThisStrict(); // undefined

// const user = {
//   name: 'Mike',
//   hobbies: ['reading', 'gaming'],
//   showHobbies: function() {
//     this.hobbies.forEach(function(hobby) {
//       console.log(this.name + ' likes ' + hobby);
//       // 'this' here uses default binding!
//     });
//   }
// };

// user.showHobbies(); // "undefined likes reading", "undefined likes gaming"

// 4: IMPLICIT BINDING
const car = {
  brand: 'Toyota',
  model: 'Camry',
  getDetails: function() {
    return this.brand + ' ' + this.model;
  }
};

console.log(car.getDetails()); // "Toyota Camry"
// 'this' refers to 'car' because car.getDetails()

const company = {
  name: 'TechCorp',
  employee: {
    name: 'Alice',
    getName: function() {
      return this.name;
    }
  }
};

console.log(company.employee.getName()); // "Alice"
// 'this' refers to 'employee', not 'company'

const product = {
  name: 'Laptop',
  price: 1200,
  getPrice: function() {
    return this.price;
  }
};

const priceFunction = product.getPrice;
console.log(priceFunction()); // undefined

// The function is no longer attached to the object
// So it falls back to default binding

const button = {
  text: 'Click me',
  handleClick: function() {
    console.log('Button says: ' + this.text);
  }
};

// Imagine this is an event listener
setTimeout(button.handleClick, 1000); // "Button says: undefined"
// The method is passed as a callback, losing its context

// 5: EXPLICIT BINDING
function introduce(greeting, punctuation) {
  console.log(greeting + ', I am ' + this.name + punctuation);
}

const person1 = { name: 'John' };
const person2 = { name: 'Emma' };

introduce.call(person1, 'Hello', '!'); // "Hello, I am John!"
introduce.call(person2, 'Hi', '.'); // "Hi, I am Emma."
// We explicitly set 'this' to person1 and person2

introduce.apply(person1, ['Hey', '!!!']); // "Hey, I am John!!!"

const introduceJohn = introduce.bind(person1);
introduceJohn('Greetings', '.'); // "Greetings, I am John."
// No matter how we call it, 'this' is always person1

const user = {
  name: 'Mike',
  hobbies: ['reading', 'gaming'],
  showHobbies: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(this.name + ' likes ' + hobby);
    }.bind(this)); // Bind 'this' to the callback
  }
};

user.showHobbies();
// "Mike likes reading"
// "Mike likes gaming"

// 6: NEW BINDING
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.getInfo = function() {
    return this.brand + ' ' + this.model;
  };
}

const car1 = new Car('Honda', 'Civic');
const car2 = new Car('Ford', 'Mustang');

console.log(car1.getInfo()); // "Honda Civic"
console.log(car2.getInfo()); // "Ford Mustang"


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
}

const person = new Person('Sarah', 28);
person.introduce(); // "Hi, I'm Sarah and I'm 28 years old"

// 7: PRIORITY OF BINDING RULES
function display() {
  console.log(this.value);
}

const obj1 = { value: 'Object 1' };
const obj2 = { value: 'Object 2' };

// Implicit binding
obj1.display = display;
obj1.display(); // "Object 1"

// Explicit binding overrides implicit
obj1.display.call(obj2); // "Object 2"

// Bind creates a hard binding
const boundDisplay = display.bind(obj1);
boundDisplay.call(obj2); // "Object 1" - bind wins over call!

// 8: COMMON SOLUTIONS
const counter = {
  count: 0,
  increment: function() {
    this.count++;
    console.log(this.count);
  }
};
// Problem: 'this' refers to button element, not counter object
// button.addEventListener('click', counter.increment);

// Solution 1: Arrow function wrapper
// button.addEventListener('click', () => counter.increment());

// Solution 2: Bind
// button.addEventListener('click', counter.increment.bind(counter));

// 9: PRACTICAL EXAMPLES
const timer = {
  seconds: 0,
  start: function() {
    // setInterval callback needs correct 'this'
    setInterval(function() {
      this.seconds++;
      console.log(this.seconds + ' seconds elapsed');
    }.bind(this), 1000);
  }
};

// timer.start(); // Counts seconds correctly

const builder = {
  value: '',

  add: function(str) {
    this.value += str;
    return this; // Return 'this' for chaining
  },

  space: function() {
    this.value += ' ';
    return this;
  },

  build: function() {
    return this.value;
  }
};

const result = builder.add('Hello').space().add('World').build();
console.log(result); // "Hello World"


// 10: DEBUGGING 'THIS'
function debugThis() {
  console.log('this is:', this);
  console.log('type:', typeof this);
  console.log('constructor:', this.constructor.name);
}

const obj = {
  test: debugThis
};

// Try these and observe the output:
debugThis(); // Global or undefined
obj.test(); // Object
debugThis.call({ custom: 'object' }); // Custom object
new debugThis(); // New instance
