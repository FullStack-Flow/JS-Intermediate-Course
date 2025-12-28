// 1: WHAT IS DESTRUCTURING?
// 2: ARRAY DESTRUCTURING BASICS
// const colors = ['red', 'green']
// const firstColor = colors[1]
// const [firstColor, secondcolor] = colors

// 3: SKIPPING ELEMENTS & DEFAULT VALUES
// const [firstColor, secondcolor, third = "yellow", fourth = 'indego'] = colors
// console.log(third)

// 4: REST PATTERN WITH ARRAYS
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const [first, second, ...remaining] = numbers;

// console.log(first);      // 1
// console.log(second);     // 2
// console.log(remaining);  // [3, 4, 5, 6, 7, 8]

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a, b);  // 20 10

// 5: OBJECT DESTRUCTURING BASICS
// const user = {
//   name: 'John Doe',
//   age: 30,
//   email: 'john@example.com',
//   country: 'USA'
// };

// const name = user.name;
// const age = user.age;
// const email = user.email;

// const { name, age, email } = user;

// 6: RENAMING & DEFAULTS IN OBJECTS
// const { name: fullName, age: userAge } = user;

// console.log(fullName);  // John Doe
// console.log(userAge);   // 30

// const {
//   name: fullName,
//   email: userEmail = 'No email'
// } = user;

// console.log(fullName);   // John Doe
// console.log(userEmail);  // No email

// 7: REST PATTERN & NESTED DESTRUCTURING
// const { name, age, ...otherDetails } = user;

// console.log(otherDetails);
// { email: 'john@example.com', country: 'USA' }

const user = {
  name: 'John Doe',
  address: {
    city: 'New York',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  }
};

// const {
//   name,
//   address: {
//     city,
//     coordinates: { lat, lng }
//   }
// } = user;

// console.log(city);  // New York
// console.log(lat);   // 40.7128
// console.log(lng);   // -74.0060

// 8: FUNCTION PARAMETERS
// function displayUser({ name, age, email = 'No email' }) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Email: ${email}`);
// }

// const user = {
//   name: 'John Doe',
//   age: 30
// };

// displayUser(user);
// Name: John Doe
// Age: 30
// Email: No email

// function getCoordinates([x, y, z = 0]) {
//   return { x, y, z };
// }

// const coords = getCoordinates([10, 20]);
// console.log(coords); // { x: 10, y: 20, z: 0 }


// 9: PRACTICAL EXAMPLES
    // Example 1: API responses
    const response = {
        status: 200,
        data: {
            users: [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' }
            ]
        }
    };

    const { status, data: { users } } = response;

    console.log(status);  // 200
    console.log(users);   // Array of users

    // Example 2: Loops with destructuring
    users.forEach(({ name, age }) => {
        console.log(`${name} is ${age} years old`);
    });
    // Example 3: Multiple return values
    function getMinMax(numbers) {
        return {
            min: Math.min(...numbers),
            max: Math.max(...numbers)
        };
    }

    const { min, max } = getMinMax([5, 2, 8, 1, 9]);
    console.log(`Min: ${min}, Max: ${max}`); // Min: 1, Max: 9
