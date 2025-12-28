// 1: DEFAULT PARAMETERS
// function greet(name, message) {
//   const userName = name || 'Guest';
//   const greetMessage = message || 'Welcome!';
//   console.log(greetMessage + ' ' + userName);
// }

function greet(name = 'Guest', message = 'Welcome!') {
  console.log(message + ' ' + name);
}

greet('John', 'Hello'); // Hello John
greet('Sarah'); // Welcome! Sarah
greet(); // Welcome! Guest

// 2: DEFAULT PARAMETERS WITH EXPRESSIONS
// Using expressions
function createUser(name = 'Anonymous', id = Math.random()) {
  return { name, id };
}

console.log(createUser());
// { name: 'Anonymous', id: 0.12345... }

// Reference earlier parameters
function buildMessage(name, greeting = `Hello, ${name}!`) {
  console.log(greeting);
}

buildMessage('Sarah'); // Hello, Sarah!
buildMessage('John', 'Welcome'); // Welcome

// Call functions as defaults
function getDefaultPrice() {
  return 99.99;
}

function createProduct(name, price = getDefaultPrice()) {
  return { name, price };
}

console.log(createProduct('Laptop'));
// { name: 'Laptop', price: 99.99 }


// 3: REST PARAMETERS - THE BASICS
// Old way - using arguments object
function oldSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50

// Finding maximum
function findMax(...numbers) {
  return Math.max(...numbers);
}

console.log(findMax(45, 23, 89, 12, 67)); // 89

// Filtering values
function sumPositive(...numbers) {
  return numbers
    .filter(num => num > 0)
    .reduce((total, num) => total + num, 0);
}

console.log(sumPositive(5, -3, 8, -1, 12)); // 25

// 4: MIXING REGULAR AND REST PARAMETERS
function introduce(greeting, ...names) {
  console.log(greeting);
  names.forEach(name => console.log(`- ${name}`));
}

introduce('Team members:', 'Alice', 'Bob', 'Charlie');
// Team members:
// - Alice
// - Bob
// - Charlie

function calculateTotal(discount, ...prices) {
  const subtotal = prices.reduce((sum, price) => sum + price, 0);
  return subtotal - discount;
}

console.log(calculateTotal(10, 50, 30, 20)); // 90

// 5: COMBINING DEFAULT AND REST PARAMETERS
function createMessage(greeting = 'Hello', ...names) {
  if (names.length === 0) {
    return `${greeting}, everyone!`;
  }
  return `${greeting}, ${names.join(', ')}!`;
}

console.log(createMessage());
// Hello, everyone!

console.log(createMessage('Welcome', 'Alice', 'Bob'));
// Welcome, Alice, Bob!

// Practical example
function addToCart(userId, discount = 0, ...items) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const finalPrice = total - (total * discount / 100);

  return {
    userId,
    items: items.length,
    total: finalPrice
  };
}

const cart = addToCart(
  'user456',
  10,
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 50 }
);
console.log(cart);
// { userId: 'user456', items: 2, total: 945 }

// 6: KEY DIFFERENCES - REST VS ARGUMENTS

// arguments object (old way)
function oldWay() {
  console.log(Array.isArray(arguments)); // false
  // Need to convert to use array methods
  const arr = Array.from(arguments);
  console.log(arr.map(x => x * 2));
}

// Rest parameters (ES6 way)
function newWay(...args) {
  console.log(Array.isArray(args)); // true
  console.log(args.map(x => x * 2)); // Works directly!
}

newWay(1, 2, 3); // [2, 4, 6]
