// 1: WHAT IS THE SPREAD OPERATOR?
const number = [1, 2, 3]
console.log(...number) // Output: 1, 2, 3
// 2: SPREADING ARRAYS
    // Copying Arrays
    const originalArray = [1, 2, 3, 4, 5];
    const copiedArray = [...originalArray];

    console.log(copiedArray); // [1, 2, 3, 4, 5]

    // It's a true copy, not a reference
    copiedArray.push(6);
    console.log(originalArray); // [1, 2, 3, 4, 5] - unchanged!
    console.log(copiedArray);   // [1, 2, 3, 4, 5, 6]

    // Combining Arrays
    const fruits = ['apple', 'banana'];
    const vegetables = ['carrot', 'broccoli'];
    const dairy = ['milk', 'cheese'];

    const groceries = [...fruits, ...vegetables, ...dairy];
    console.log(groceries);
    // ['apple', 'banana', 'carrot', 'broccoli', 'milk', 'cheese']


    const numbers = [1, 2, 5, 6];
    const completeNumbers = [0, ...numbers, 7, 8];
    console.log(completeNumbers); // [0, 1, 2, 5, 6, 7, 8]

    // Adding Elements to Arrays
    const colors = ['red', 'blue'];
    const moreColors = [...colors, 'green', 'yellow'];
    console.log(moreColors); // ['red', 'blue', 'green', 'yellow']

    // You can spread at the beginning too
    const evenMoreColors = ['purple', ...moreColors, 'orange'];
    console.log(evenMoreColors);
    // ['purple', 'red', 'blue', 'green', 'yellow', 'orange']

// 3: SPREAD WITH FUNCTION ARGUMENTS
const scores = [85, 92, 78, 95, 88];

// Old way (using apply)
const maxOld = Math.max.apply(null, scores);

// New way with spread
const maxNew = Math.max(...scores);
console.log(maxNew); // 95

const minScore = Math.min(...scores);
console.log(minScore); // 78


const calculateTotal = (price, tax, discount) => {
  return price + tax - discount;
};

const values = [100, 15, 10];
const total = calculateTotal(...values);
console.log(total); // 105

// 4: SPREADING OBJECTS
    // Copying Objects
    const person = {
        name: 'John',
        age: 30,
        city: 'New York'
    };

    const personCopy = { ...person };
    console.log(personCopy);
    // { name: 'John', age: 30, city: 'New York' }

    // It's a true copy
    personCopy.age = 31;
    console.log(person.age);     // 30 - original unchanged
    console.log(personCopy.age); // 31

    // Merging Objects
    const basicInfo = {
        name: 'Sarah',
        age: 28
    };

    const contactInfo = {
        email: 'sarah@example.com',
        phone: '555-1234'
    };

    const completeProfile = { ...basicInfo, ...contactInfo };
    console.log(completeProfile);
    // {
    //   name: 'Sarah',
    //   age: 28,
    //   email: 'sarah@example.com',
    //   phone: '555-1234'
    // }

    // Overriding Properties
    const defaults = {
        theme: 'dark',
        language: 'en',
        notifications: true
    };

    const userSettings = {
        language: 'es',
        fontSize: 'large'
    };

    const finalSettings = { ...defaults, ...userSettings };
    console.log(finalSettings);
    // {
    //   theme: 'dark',
    //   language: 'es',        // overridden
    //   notifications: true,
    //   fontSize: 'large'      // added
    // }

    // Adding or Updating Properties
    const user = {
        id: 1,
        name: 'Alice',
        role: 'user'
    };

    // Update existing and add new properties
    const updatedUser = {
        ...user,
        role: 'admin',           // update
        lastLogin: '2025-11-18'  // add new
    };

    console.log(updatedUser);
    // {
    //   id: 1,
    //   name: 'Alice',
    //   role: 'admin',
    //   lastLogin: '2025-11-18'
    // }

// 5: SHALLOW COPY WARNING
const original = {
  name: 'Tom',
  address: {
    city: 'Boston',
    zip: '02101'
  }
};

const copy = { ...original };

// Changing nested object affects both
copy.address.city = 'Chicago';

console.log(original.address.city); // 'Chicago' - Oops!
console.log(copy.address.city);     // 'Chicago'

// But top-level properties are independent
copy.name = 'Jerry';
console.log(original.name); // 'Tom' - unchanged

// 6: PRACTICAL USE CASES 
    // Use Case 1: Converting Strings to Arrays
    const greeting = 'Hello';
    const letters = [...greeting];
    console.log(letters); // ['H', 'e', 'l', 'l', 'o']

    // Use Case 2: Removing Duplicates with Set
    // const numbers = [1, 2, 3, 2, 4, 1, 5, 3];
    const uniqueNumbers = [...new Set(numbers)];
    console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

    // Use Case 3: Immutable State Updates (React Pattern)
    const todoList = [
        { id: 1, text: 'Learn JS', done: false },
        { id: 2, text: 'Build project', done: false }
    ];

    // Adding a new todo immutably
    const newTodo = { id: 3, text: 'Deploy app', done: false };
    const updatedList = [...todoList, newTodo];

    console.log(todoList.length);    // 2 - original unchanged
    console.log(updatedList.length); // 3

    // Use Case 4: Function with Optional Properties
    const createUser = (requiredData, optionalData = {}) => {
        const defaultOptions = {
            role: 'user',
            active: true,
            notifications: true
        };

        return {
            ...defaultOptions,
            ...optionalData,
            ...requiredData  // ensure required data takes precedence
        };
    };

    const newUser = createUser(
        { id: 101, name: 'Emma' },
        { role: 'admin', theme: 'dark' }
    );

    console.log(newUser);
    // {
    //   role: 'admin',
    //   active: true,
    //   notifications: true,
    //   theme: 'dark',
    //   id: 101,
    //   name: 'Emma'
    // }

// 7: SPREAD VS REST
// REST: Collects items INTO an array (function parameters)
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 3, 4)); // 10

// SPREAD: Expands items OUT of an array
const nums = [1, 2, 3, 4];
console.log(sum(...nums)); // 10 - spreading the array into arguments

// You can use both together!
const calculate = (operation, ...numbers) => {
  if (operation === 'max') return Math.max(...numbers);
  if (operation === 'min') return Math.min(...numbers);
};

console.log(calculate('max', 5, 2, 8, 1)); // 8
