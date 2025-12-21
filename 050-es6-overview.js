// 1: WHAT IS ES6+?
    // - ES6 - ES2015
    // - ES7 - ES2016
    // - ES8 - ES2017
    // - ES9 - ES2018 
// 2: WHY ES6+ MATTERS
    // - Confusing variable scoping with `var`
    // - Verbose function syntax
    // - Complicated string concatenation
    // - Callback hell in asynchronous code
    // - Awkward ways to handle arrays and objects

    // - `let` and `const` for better scoping
    // - Arrow functions for cleaner syntax
    // - Template literals for easy string formatting
    // - Promises and async/await for handling asynchronous code
    // - Destructuring, spread operators, and so much more

// 3: KEY ES6+ FEATURES OVERVIEW
    // 1. Let and Const
        // const name = "Sarah"
        // let age = 25

        // name = "John"
        // age = 26
    // 2. Arrow Functions
    // function add(a, b){
    //     return a + b;
    // }

    // ES6 way
    // const add = (a, b) => a + b;

    // console.log(add(5, 3)) // 8

    // 3. Template Literals
    // const userName = "Alex"
    // const greeting = `Hello, ${userName}! Welcome back.`
    // console.log(greeting)

    // 4. Destructuring
    // const user = {
    //     name: "Mike",
    //     age: 30,
    //     city: "NYC"
    // }

    // const {name, age, city} = user

    // console.log(name, age, user.name)

    // 5. Spread Operator
    const numbers = [1, 2, 3]
    const moreNumbers = [...numbers, 4, 5]

    console.log(moreNumbers)

    // 6. Promises & Async/Await
    const fetchData = async () => {
        const response = await fetch('https://api.example.com/data')
        const data = await response.json();
        console.log(data)
    }
    // 7. Classes
    class Person {
        constructor(name){
            this.name = name;
        }

        greet(){
            console.log(`Hi, I'm ${this.name}`)
        }
    }

    const person = new Person('Emma')
    person.greet() // Hi, I'm Emma

// 4: BROWSER COMPATIBILITY
    // Solution 1: Transpilation
    // const add = (a, b) => a + b;

    // var add = function(a, b) {
    //     return a + b;
    // };

    // Solution 2: Polyfills
    // Solution 3: Check Compatibility
// 5: HOW TO CHECK BROWSER SUPPORT
    // 1. Visit caniuse.com
    // 2. Check MDN (Mozilla Developer Network)
    // 3. Use Feature Detection
    if (typeof Symbol !== 'undefined') {
        console.log('Symbols are supported!');
    } else {
        console.log('Symbols are NOT supported.');
    }

// 6: WHAT'S COMING NEXT