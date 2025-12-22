// 1: THE OLD WAY - STRING CONCATENATION 
// const name = "Sarah";
// const age = 28;
// const city = "NYC"

// Old Way
// const message = "Hello, my name is " + name + ". I am " + age + " years old and I live in " + city + "."
// console.log(message)

// const oldMultiLine = "This is line one.\n" +
//                      "This is line two.\n" +
//                      "This is line three.";
// console.log(oldMultiLine);

// 2: INTRODUCING TEMPLATE LITERALS
// const message = `Hello, my name is ${name}. I am ${age} years old and I live in ${city}.`;

// console.log(message)

// const multiLine = `This is line one.
// This is line two.
// This is line three.`;
// console.log(multiLine);

// 3: EXPRESSIONS IN TEMPLATE LITERALS
// const price = 99.99;
// const quantity = 3;

//Mathematical operations
// const total = `Total cost: $${price * quantity}`;
// console.log(total)

// Function calls
// const upperCase = `Your name in uppercase: ${name.toUpperCase()}`;
// console.log(upperCase); // Your name in uppercase: SARAH

// Conditional (ternary) operator
// const discount = 10;
// const finalMessage = `Your discount is ${discount > 0 ? 'active' : 'inactive'}`;
// console.log(finalMessage); // Your discount is active

// const user = {
//   name: "John",
//   premium: true
// };

// const greeting = `Welcome ${user.name}! ${user.premium ? `You have premium access` : `Upgrade to premium`}`;
// console.log(greeting);

// 4: PRACTICAL EXAMPLES
    // HTML Generation:
    // const product = {
    //     name: "Wireless Mouse",
    //     price: 29.99,
    //     rating: 4.5
    // };

    // const productCard = `
    //     <div class="product-card">
    //         <h3>${product.name}</h3>
    //         <p>Price: $${product.price}</p>
    //         <p>Rating: ${product.rating} stars</p>
    //     </div>
    // `;

    // console.log(productCard);

    // Dynamic URLs:
    // const userId = 12345;
    // const apiEndpoint = "users";

    // const apiUrl = `https://api.example.com/${apiEndpoint}/${userId}/profile`;
    // console.log(apiUrl);
    // https://api.example.com/users/12345/profile

    // Formatting Data:
    // const order = {
    //     id: "ORD-2025",
    //     items: 5,
    //     total: 149.99
    // };

    // const receipt = `
    //     Order ID: ${order.id}
    //     Items: ${order.items}
    //     Total: $${order.total.toFixed(2)}
    //     Thank you for your purchase!
    // `;

    // console.log(receipt);

// 5: TAGGED TEMPLATES - ADVANCED
function highlight(strings, ...values) {
  console.log(strings); // Array of string parts
  console.log(values);  // Array of interpolated values

  return strings.reduce((result, str, i) => {
    return `${result}${str}${values[i] ? `<strong>${values[i]}</strong>` : ''}`;
  }, '');
}

const name = "JavaScript";
const version = "ES6";

const result = highlight`Learning ${name} with ${version}`;
console.log(result);
// Learning <strong>JavaScript</strong> with <strong>ES6</strong>

function sanitize(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] || '';
    // Simple HTML escaping
    const sanitized = String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    return result + str + sanitized;
  }, '');
}

const userInput = "<script>alert('XSS')</script>";
const safe = sanitize`User entered: ${userInput}`;
console.log(safe);
// User entered: &lt;script&gt;alert('XSS')&lt;/script&gt;

function currency(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i];
    const formatted = typeof value === 'number'
      ? `$${value.toFixed(2)}`
      : value || '';

    return result + str + formatted;
  }, '');
}

const itemPrice = 19.5;
const taxAmount = 2.34;

const invoice = currency`Item: ${itemPrice}, Tax: ${taxAmount}, Total: ${itemPrice + taxAmount}`;
console.log(invoice);
// Item: $19.50, Tax: $2.34, Total: $21.84

// 6: ADVANCED TAGGED TEMPLATE EXAMPLE
function styled(strings, ...values) {
  const styles = [];
  let output = '';

  strings.forEach((str, i) => {
    output += str;

    if (values[i] !== undefined) {
      if (typeof values[i] === 'object' && values[i].style) {
        output += `%c${values[i].text}%c`;
        styles.push(values[i].style, ''); // Reset style after
      } else {
        output += values[i];
      }
    }
  });

  console.log(output, ...styles);
}

// Usage
styled`This is ${{ text: 'important', style: 'color: red; font-weight: bold' }} and this is ${{ text: 'highlighted', style: 'background: yellow' }}`;

// 7: COMMON GOTCHAS & BEST PRACTICES
    // Gotcha #1: Backticks vs Quotes
    const wrong = `Hello ${name}`
    // Gotcha #2: Escaping Backticks
    const message = `Use backticks \` for template literals`;
    console.log(message) // Use backticks ` for template literals

    // Good - simple expression
    // const greeting = `Hello, ${userName}!`;

    // Better - complex logic outside
    // const discountPercent = calculateDiscount(user);
    // const message = `Your discount: ${discountPercent}%`;

    // Not recommended - too complex
    // const bad = `Result: ${users.filter(u => u.active).map(u => u.name.toUpperCase()).join(', ')}`;
