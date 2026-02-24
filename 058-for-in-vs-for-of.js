// 1: THE KEY DIFFERENCE
// const colors = ['red', 'green', 'blue'];

// // for...in gives you INDEXES (as strings)
// for (const index in colors) {
//   console.log(index); // '0', '1', '2'
// }

// // for...of gives you VALUES
// for (const value of colors) {
//   console.log(value); // 'red', 'green', 'blue'
// }

// 2: FOR...IN WITH OBJECTS
// const person = {
//   name: 'Sarah',
//   age: 28,
//   job: 'Developer'
// };

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }
// Output:
// name: Sarah
// age: 28
// job: Developer

// for (const key in person) {
//   if (Object.hasOwn(person, key)) {
//     console.log(`${key}: ${person[key]}`);
//   }
// }

// 3: FOR...OF WITH ARRAYS
// const numbers = [10, 20, 30];

// for (const num of numbers) {
//   console.log(num * 2); // 20, 40, 60
// }

// const word = 'JavaScript';

// for (const char of word) {
//   console.log(char); // J, a, v, a, s, c, r, i, p, t
// }

// const tasks = ['Code', 'Test', 'Deploy'];

// for (const [index, task] of tasks.entries()) {
//   console.log(`${index + 1}. ${task}`);
// }
// 1. Code
// 2. Test
// 3. Deploy

// 4: COMMON MISTAKES
const nums = [5, 10, 15];

// WRONG - indexes come back as STRINGS
for (const n in nums) {
  console.log(n * 2); // NaN! ('0' * 2 = NaN)
}

// RIGHT - use for...of
for (const n of nums) {
  console.log(n * 2); // 10, 20, 30
}

const user = { name: 'John', age: 30 };

// WRONG - Objects aren't iterable
// for (const value of user) {} // TypeError!

// RIGHT - Use for...in
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// OR use Object.entries()
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// 5: WHEN TO USE WHICH
// Modern approach - array methods
const prices = [10, 20, 30];

prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price}`);
});
