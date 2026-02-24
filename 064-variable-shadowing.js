// 1: VARIABLE SHADOWING
const userName = "Alice";

function greet() {
    const userName = "Bob"; // Shadows outer userName
    console.log(userName) // "Bob"
}

greet()

console.log(userName) // "Alice"

let score = 100;

if (true) {
  let score = 200; // Legal shadowing
  console.log(score); // Output: 200
}

console.log(score); // Output: 100

// function example() {
//   let value = 10;

//   if (true) {
//     var value = 20; // SyntaxError!
//   }
// }

function example() {
  var value = 10;

  if (true) {
    let value = 20; // Fine - let is block-scoped
    console.log(value); // Output: 20
  }
}

// 2: TEMPORAL DEAD ZONE
console.log(name); // ReferenceError!
let name = "John";


console.log(oldVar); // Output: undefined
var oldVar = "I'm hoisted";

console.log(newLet); // ReferenceError!
let newLet = "I'm in TDZ";

const x = 10;

{
  console.log(x); // ReferenceError!
  const x = 20; // Inner x is in TDZ
}

// BEST PRACTICES
// 1. Declare variables at the top
function calculatePrice() {
  const basePrice = 100;
  const taxRate = 0.1;
  let total = 0;

  total = basePrice * (1 + taxRate);
  return total;
}

// 2. Use unique names to avoid shadowing
const config = { theme: "dark" };

function updateConfig() {
  const userConfig = { theme: "light" };
  console.log(userConfig.theme);
}

// 3. Prefer const, use let when needed, avoid var
const MAX_ITEMS = 50;
let currentItems = 0;
