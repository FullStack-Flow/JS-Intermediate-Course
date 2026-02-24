// 1: THE KEY DIFFERENCE
// const person = {
//   name: 'Alice',
//   greet: function() {
//     console.log('Hello, I am ' + this.name);
//   }
// };

// person.greet(); // Output: Hello, I am Alice

const person = {
  name: 'Alice',
  greet: () => {
    console.log('Hello, I am ' + this.name);
  }
};

person.greet(); // Output: Hello, I am undefined

// 2: WHERE ARROW FUNCTIONS SHINE
const counter = {
  count: 0,
  start: function() {
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};

counter.start(); // Output: 1, 2, 3....

const team = {
  members: ['John', 'Sarah', 'Mike'],
  teamName: 'Developers',
  showTeam: function() {
    this.members.forEach((member) => {
      console.log(member + ' is part of ' + this.teamName);
    });
  }
};

team.showTeam();
// Output:
// John is part of Developers
// Sarah is part of Developers
// Mike is part of Developers

// 3: IMPORTANT LIMITATIONS
const Person = (name) => {
  this.name = name;
};

const john = new Person('John'); // Error!

const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3, 4)); // Output: 10

const arrowFunc = () => console.log(this);
const obj = { name: 'Test' };

arrowFunc.call(obj); // 'this' is NOT changed

// 4: QUICK GUIDELINES
// ✅ Good
// const numbers = [1, 2, 3];
// const doubled = numbers.map(n => n * 2);

// // ❌ Bad
// const calculator = {
//   value: 0,
//   add: (n) => this.value += n // Won't work!
// };

// // ✅ Correct
// const calculator = {
//   value: 0,
//   add: function(n) {
//     this.value += n;
//   }
// };
