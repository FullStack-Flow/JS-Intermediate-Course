// WHAT IS THE FOR...OF LOOP?
// for(const elements of iterable){
//     // code to execute for each element
// }

// const fruits = ['apple', 'banana', 'orange','mango']

// for(const fruit of fruits){
//     console.log(fruit)
// }
// COMPARING FOR...OF WITH OTHER LOOPS
// const numbers = [10, 20, 30, 40];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (const num of numbers) {
//   console.log(num);
// }

// for(const [index, fruit] of fruits.entries()){
//     console.log(`${index}: ${fruit}`)
// }

// WHAT ARE ITERABLES?
// const uniqueNumbers = new Set([1, 2, 3, 2, 1]);

// for (const num of uniqueNumbers) {
//   console.log(num);
// }

// Output:
// 1
// 2
// 3

// const userRoles = new Map([
//   ['john', 'admin'],
//   ['jane', 'editor'],
//   ['bob', 'viewer']
// ]);

// for (const [username, role] of userRoles) {
//   console.log(`${username} is an ${role}`);
// }

// Output:
// john is an admin
// jane is an editor
// bob is an viewer

// WHAT'S NOT ITERABLE?
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

// This will throw an error!
// for (const prop of person) {
//   console.log(prop);
// }

// Iterate over keys
for (const key of Object.keys(person)) {
  console.log(key);
}

// Iterate over values
for (const value of Object.values(person)) {
  console.log(value);
}

// Iterate over key-value pairs
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// PRACTICAL EXAMPLES
// Example 1: Processing Shopping Cart Items
const cartItems = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
];

let totalPrice = 0;

for (const item of cartItems) {
  totalPrice += item.price;
  console.log(`Added ${item.name}: $${item.price}`);
}

console.log(`Total: $${totalPrice}`);

// Example 2: Validating User Input
const userInputs = ['john@email.com', '', 'jane@email.com', 'invalid'];

for (const email of userInputs) {
  if (email && email.includes('@')) {
    console.log(`Valid email: ${email}`);
  } else {
    console.log(`Invalid email: ${email}`);
  }
}

// BREAK AND CONTINUE WITH FOR...OF
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find first number greater than 5
for (const num of numbers) {
  if (num > 5) {
    console.log(`Found it: ${num}`);
    break;
  }
}

// Skip even numbers
for (const num of numbers) {
  if (num % 2 === 0) {
    continue;
  }
  console.log(`Odd number: ${num}`);
}

// FOR...OF VS FOR...IN - KEY DIFFERENCES
const languages = ['JavaScript', 'Python', 'Java'];

// for...in gives you indices (keys)
console.log('for...in:');
for (const index in languages) {
  console.log(index); // '0', '1', '2' (as strings!)
}

// for...of gives you values
console.log('for...of:');
for (const language of languages) {
  console.log(language); // 'JavaScript', 'Python', 'Java'
}

// WHEN TO USE FOR...OF