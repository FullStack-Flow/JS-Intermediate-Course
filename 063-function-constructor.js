// 1: FUNCTIONS ARE OBJECTS
function name(params) {
    return `Hello, ${params}`
}

console.log(name.params) // name
console.log(name.length) // 1

name.callCount = 0;
name.version = "1.0"

console.log(name.version) // 1.0

// 2: THE FUNCTION CONSTRUCTOR
// Traditional way
function add(a, b) {
  return a + b;
}

// Using Function constructor
const addConstructor = new Function('a', 'b', 'return a + b');

console.log(add(5, 3)); // 8
console.log(addConstructor(5, 3)); // 8

const x = 10;

function normal() {
  return x; // Works - accesses outer scope
}

const constructed = new Function('return x');
// Error! Only has global scope


// 3: BUILT-IN FUNCTION PROPERTIES
function calculateTotal() {
  return 100;
}

console.log(calculateTotal.name); // "calculateTotal"

const multiply = (a, b) => a * b;
console.log(multiply.name); // "multiply"

function logCall(fn, ...args) {
  console.log(`Calling: ${fn.name}`);
  return fn(...args);
}

function add(a, b) {
  return a + b;
}
console.log(add.length); // 2

function withRest(a, b, ...rest) {}
console.log(withRest.length); // 2 (rest params don't count)

function withDefault(a, b = 5) {}
console.log(withDefault.length); // 1 (stops at first default)

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

const alice = new Person("Alice");
console.log(alice.greet()); // "Hi, I'm Alice"

// 4: CUSTOM PROPERTIES & PRACTICAL USE
    // Function Counter:
    function trackCalls() {
        trackCalls.count++;
        console.log(`Called ${trackCalls.count} times`);
    }

    trackCalls.count = 0;

    trackCalls(); // Called 1 times
    trackCalls(); // Called 2 times

    // Memoization (Caching):
function fibonacci(n) {
  if (n <= 1) return n;

  if (fibonacci.cache[n]) {
    return fibonacci.cache[n];
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  fibonacci.cache[n] = result;
  return result;
}

fibonacci.cache = {};

console.log(fibonacci(10)); // 55
console.log(fibonacci(10)); // 55 (cached!)
