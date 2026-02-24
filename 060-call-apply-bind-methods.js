// 1: THE PROBLEM
// const person = {
//     fName: 'John',
//     lName: "Doe",
//     getFullName: function(){
//         return `${this.fName} ${this.lName}`
//     }
// }

// const anotherPerson = {
//     fName: "Jane",
//     lName: "Smith"
// }

// console.log(person.getFullName()) // "John Doe"

// 2: THE CALL METHOD
    // function.call(thisArg, arg1, arg2, ...)
    // const result = person.getFullName.call(anotherPerson);
    // console.log(result)

// 3: THE APPLY METHOD
// function.call(thisArg, [argsArray])
const person = {
  firstName: 'John',
  lastName: 'Doe',
  introduce: function(age, city) {
    return `Hi, I'm ${this.firstName} ${this.lastName}, ${age} years old from ${city}`;
  }
};

const anotherPerson = {
  firstName: 'Jane',
  lastName: 'Smith'
};
const intro = person.introduce.apply(anotherPerson, [28, 'New York'])
console.log(intro)


const numbers = [5, 10, 15, 20, 25];

// Using Math.max with apply
const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // 25

// Modern alternative with spread operator:
const maxNum = Math.max(...numbers);
console.log(maxNum); // 25

// 4: THE BIND METHOD
    // function.bind(thisArg, arg1, arg2, ...)
    const result = person.getFullName.bind(anotherPerson);
    console.log(result) // "Jane Smith"

    const user = {
        name: 'Alice',
        age: 25,
        greet: function() {
            console.log(`Hello, I'm ${this.name}`);
        }
    };

    // Without bind - loses context
    // button.addEventListener('click', user.greet); // this would be undefined

    // With bind - maintains context
    // button.addEventListener('click', user.greet.bind(user));

// 5: PRACTICAL COMPARISON
const calculator = {
  number: 10,
  calculate: function(a, b) {
    return this.number + a + b;
  }
};

const newCalc = { number: 100 };

// call - invokes immediately, individual args
console.log(calculator.calculate.call(newCalc, 5, 3)); // 108

// apply - invokes immediately, array of args
console.log(calculator.calculate.apply(newCalc, [5, 3])); // 108

// bind - returns new function
const boundCalc = calculator.calculate.bind(newCalc, 5, 3);
console.log(boundCalc()); // 108

// 6: COMMON USE CASES
    // 1. Function Borrowing:
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    // Borrowing push method
    Array.prototype.push.apply(array1, array2);
    console.log(array1); // [1, 2, 3, 4, 5, 6]

    // 2. Finding Max/Min:
    const scores = [85, 92, 78, 95, 88];

    const maxScore = Math.max.apply(null, scores);
    const minScore = Math.min.apply(null, scores);

    console.log(maxScore); // 95
    console.log(minScore); // 78

    // 3. Creating Bound Methods:
    const module = {
        x: 42,
        getX: function() {
            return this.x;
        }
    };

    const unboundGetX = module.getX;
    console.log(unboundGetX()); // undefined - lost context

    const boundGetX = unboundGetX.bind(module);
    console.log(boundGetX()); // 42 - context preserved
