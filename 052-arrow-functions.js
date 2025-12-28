// 1: BASIC SYNTAX
    // What Are Arrow Functions?
    // const greet = function(name){
    //     return `Hello ${name}!`
    // }
    // console.log(greet('Sarah'))

    // const greet = (name) => {
    //     return `Hello ${name}!` 
    // }
    
    // Implicit Return
    const greet = (name) => `Hello ${name}!`

    console.log(greet('Sarah'))

    // Parameter Variations
    const square = num => num * num;
    console.log(square(5)); // 25

    // No parameters
    const sayHello = () => 'Hello, World!';


    // Multiple parameters
    const add = (a, b) => a + b;

    console.log(sayHello()); // Hello, World!
    console.log(add(3, 7));  // 10

// 2: USE CASES
    // Use Case 1: Array Methods
    // Regular function
    // const numbers = [1, 2, 3, 4, 5];

    // const doubled = numbers.map(function(num) {
    //     return num * 2;
    // });

    console.log(doubled); // [2, 4, 6, 8, 10]

    // Arrow function 
    const doubled = numbers.map(num => num * 2);

    console.log(doubled); // [2, 4, 6, 8, 10]

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const evenNumbers = numbers.filter(num => num % 2 === 0);

    console.log(evenNumbers); // [2, 4, 6, 8, 10]

    // Use Case 2: Callback Functions
    const button = document.querySelector('#myButton');

    // Traditional function
    setTimeout(function() {
        console.log('3 seconds have passed!');
    }, 3000);

    // Arrow function - cleaner!
    setTimeout(() => {
        console.log('3 seconds have passed!');
    }, 3000);

    // Use Case 3: Returning Objects
    // WRONG - JavaScript thinks {} is a function body
    // const createPerson = (name, age) => { name: name, age: age };

    // // CORRECT - Wrap object in parentheses
    // const createPerson = (name, age) => ({ name: name, age: age });

    // // Or with shorthand property names
    // const createPerson = (name, age) => ({ name, age });

    // const person = createPerson('Alex', 28);
    // console.log(person); // { name: 'Alex', age: 28 }

// 3: THE 'THIS' KEYWORD DIFFERENCE
const person = {
  name: 'Emma',
  hobbies: ['reading', 'coding', 'gaming'],

  showHobbies: function() {
    // const self = this; // store reference
    // this.hobbies.forEach(function(hobby) {
    //   console.log(`${this.name} loves ${hobby}`);
    // });
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} loves ${hobby}`);
    });
  }
};

person.showHobbies();
// Emma loves reading
// Emma loves coding
// Emma loves gaming

// 4: LIMITATIONS
    // Limitation 1: Cannot Be Used as Methods
    // const person = {
    //     name: 'Jordan',

    //     // BAD - Arrow function as method
    //     greet: () => {
    //         console.log(`Hello, I'm ${this.name}`);
    //     }
    // };

    // person.greet(); // Hello, I'm undefined

    // const person = {
    //     name: 'Jordan',

    // // GOOD - Regular function
    //     // greet: function() {
    //     //     console.log(`Hello, I'm ${this.name}`);
    //     // }

    //     greet() {
    //         console.log(`Hello, I'm ${this.name}`);
    //     }
    // };

    person.greet(); // Hello, I'm Jordan

    // Limitation 2: Cannot Be Used as Constructors
    // Regular function - Works fine
    const Person = function(name) {
        this.name = name;
    };

    const person1 = new Person('Alice');
    console.log(person1.name); // Alice

    // Arrow function - ERROR!
    const PersonArrow = (name) => {
        this.name = name;
    };

    const person2 = new PersonArrow('Bob'); // TypeError: PersonArrow is not a constructor

    // Limitation 3: No 'arguments' Object
    // Regular function - has arguments object
    const showArgs = function() {
        console.log(arguments);
    };

    showArgs(1, 2, 3); // [1, 2, 3]

    // Arrow function - no arguments object
    const showArgsArrow = (...args) => {
        console.log(args);
    };

    showArgsArrow(1, 2, 3); // [1, 2, 3]

    // Limitation 4: Cannot Use 'yield'

// 5: WHEN TO USE WHAT
const calculator = {
  value: 0,

  // Regular function for method
  add(num) {
    this.value += num;
    return this;
  },

  // Regular function for method
  multiply(num) {
    this.value *= num;
    return this;
  },

  // Regular function for method
  getResult() {
    return this.value;
  }
};

// Arrow functions for array operations
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(n => n * 2);
// const sum = numbers.reduce((acc, n) => acc + n, 0);

// console.log(doubled); // [2, 4, 6, 8, 10]
// console.log(sum);     // 15

// calculator.add(10).multiply(2);
// console.log(calculator.getResult()); // 20
