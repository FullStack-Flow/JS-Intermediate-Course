// 1: TRADITIONAL OBJECT SYNTAX
const name = "John";
const age = 30;
const city = "New York";

// const person = {
//   name: name,
//   age: age,
//   city: city,
//   greet: function() {
//     console.log("Hello, I'm " + this.name);
//   }
// };

// console.log(person);

// 2: PROPERTY SHORTHAND
// const person = {
//   name,
//   age,
//   city,
//   greet: function() {
//     console.log("Hello, I'm " + this.name);
//   }
// };
// console.log(person);
// Output: { name: 'Sarah', age: 28, city: 'London' }

const createUser = (username, email, role) => {
  return {
    username,
    email,
    role,
    createdAt: new Date()
  };
};

const newUser = createUser("coder123", "coder@example.com", "admin");
console.log(newUser);


// 3: METHOD SHORTHAND
// Old way
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

// ES6 Method Shorthand
const betterCalculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  }
};

console.log(betterCalculator.add(5, 3)); // 8
console.log(betterCalculator.multiply(4, 2)); // 8


const user = {
  firstName: "Alex",
  lastName: "Johnson",

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  greet(timeOfDay) {
    return `Good ${timeOfDay}, ${this.getFullName()}!`;
  }
};

console.log(user.getFullName()); // "Alex Johnson"
console.log(user.greet("morning")); // "Good morning, Alex Johnson!"

// 4: COMPUTED PROPERTY NAMES
const propertyName = "score";
const prefix = "user";

const gameData = {
  [propertyName]: 100,
  [`${prefix}Name`]: "Player1",
  [`${prefix}Level`]: 5
};

console.log(gameData);
// Output: { score: 100, userName: 'Player1', userLevel: 5 }


const createDynamicObject = (key, value) => {
  return {
    [key]: value,
    [`${key}Uppercase`]: value.toUpperCase(),
    [`is${key.charAt(0).toUpperCase() + key.slice(1)}Valid`]: true
  };
};

const result = createDynamicObject("name", "javascript");
console.log(result);
// { name: 'javascript', nameUppercase: 'JAVASCRIPT', isNameValid: true }

// 5: COMBINING ALL ENHANCEMENTS
const buildProduct = (id, name, price, category) => {
  const timestamp = Date.now();
  const status = "active";

  return {
    // Property shorthand
    id,
    name,
    price,
    category,
    status,

    // Computed property names
    [`${category}Product`]: true,
    [timestamp]: "Created at this time",

    // Method shorthand
    getDetails() {
      return `${this.name} - $${this.price}`;
    },

    applyDiscount(percentage) {
      const discount = this.price * (percentage / 100);
      return this.price - discount;
    },

    isAffordable(budget) {
      return this.price <= budget;
    }
  };
};

const laptop = buildProduct(101, "Gaming Laptop", 1200, "electronics");
console.log(laptop);
console.log(laptop.getDetails()); // "Gaming Laptop - $1200"
console.log(laptop.applyDiscount(10)); // 1080
console.log(laptop.isAffordable(1500)); // true

// 6: PRACTICAL USE CASES
    // Use Case 1: API Response Formatting
    const formatAPIResponse = (data, statusCode, message) => {
        const timestamp = new Date().toISOString();

        return {
            statusCode,
            message,
            timestamp,
            data,

            isSuccess() {
                return this.statusCode >= 200 && this.statusCode < 300;
            },

            getFormattedData() {
                return JSON.stringify(this.data, null, 2);
            }
        };
    };

    const response = formatAPIResponse({ users: [] }, 200, "Success");
    console.log(response.isSuccess()); // true

// 7: IMPORTANT NOTES & GOTCHAS
    // 1. Method Shorthand and Arrow Functions
    const obj = {
        // Method shorthand - 'this' works normally
        regularMethod() {
            console.log(this);
        },

        // Arrow function - 'this' is lexically bound
        arrowMethod: () => {
            console.log(this); // Will NOT refer to obj
        }
    };

    // 2. Computed Property Names with Symbols

    const uniqueKey = Symbol("id");

    // const user = {
    //     name: "Tom",
    //     [uniqueKey]: 12345
    // };

    console.log(user[uniqueKey]); // 12345

    // 3. You Can Mix Old and New Syntax
    const mixed = {
        // Shorthand
        name,
        age,

        // Traditional
        city: city,

        // Method shorthand
        greet() {
            console.log("Hi!");
        }
    };
