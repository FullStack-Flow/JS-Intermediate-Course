// WHAT IS IIFE? 
function greet() {
  console.log("Hello!");
}

greet(); // We call it here

(function(){
    console.log("Hello")
})();

(function() {
  console.log("Hello!");
}());


// WHY USE IIFE?
    // Reason #1: Creating Private Scope
    (function() {
        const privateVariable = "I'm private!";
        console.log(privateVariable); // Works fine here
    })();

    console.log(privateVariable); // Error! Not accessible outside

    // Reason #2: Avoiding Global Namespace Pollution
    // const counter = 0; // From developer A
    // const counter = 10; // From developer B - Oops, conflict!

    (function() {
        const counter = 0;
        // Developer A's code
    })();

    (function() {
        const counter = 10;
        // Developer B's code
    })();

// IIFE WITH PARAMETERS
const globalValue = "I'm global";

(function(value) {
  console.log(value); // "I'm global"
  const localValue = "I'm local";
  console.log(localValue);
})(globalValue);

(function(config) {
  const apiUrl = config.url;
  const apiKey = config.key;

  console.log(`Connecting to ${apiUrl}`);
  // Your API logic here
})({ url: "https://api.example.com", key: "abc123" });


// RETURNING VALUES FROM IIFE
const calculator = (function() {
  // Private variable
  const secretMultiplier = 2;

  // Private function
  function privateAdd(a, b) {
    return a + b;
  }

  // Public API
  return {
    add: function(a, b) {
      return privateAdd(a, b);
    },
    multiply: function(a, b) {
      return a * b * secretMultiplier;
    }
  };
})();

console.log(calculator.add(5, 3)); // 8
console.log(calculator.multiply(5, 3)); // 30
console.log(calculator.secretMultiplier); // undefined - it's private!

// ARROW FUNCTION IIFE
(() => {
  console.log("Arrow function IIFE!");
})();

// With parameters
((name) => {
  console.log(`Hello, ${name}!`);
})("JavaScript");

// REAL-WORLD USE CASES
    // Use Case 1: Initialization Code
    (function() {
        // Run setup code once
        const appConfig = {
            theme: "dark",
            language: "en"
        };

        document.body.setAttribute("data-theme", appConfig.theme);
        console.log("App initialized!");
    })();

    // Use Case 2: Loop Variable Encapsulation
// Problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 3, 3, 3
  }, 1000);
}

// Solution with IIFE
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(function() {
      console.log(index); // Prints 0, 1, 2
    }, 1000);
  })(i);
}

// MODERN ALTERNATIVES

{
  const privateValue = "I'm block-scoped!";
  console.log(privateValue);
}
// privateValue is not accessible here
