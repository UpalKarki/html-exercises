
// Exercise 1: Variables and Data Types

let name = "Upal Karki";      // string
let age = 22;                // number
let email = "upal@email.com"; // string

console.log("Name:", name);
console.log("Age:", age);
console.log("Email:", email);

// Exercise 2: Functions and Conditional Statements

function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(isAdult(20));
console.log(isAdult(15));

// Exercise 3: Loops

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercise 4: Arrays and Loops

let fruits = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Exercise 5: Conditional Statements and Functions

function isEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEven(10));
console.log(isEven(7));

// Exercise 6: Conditional Statements and Loops

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " - Even");
  } else {
    console.log(i + " - Odd");
  }
}

// Exercise 7: Functions, Arrays, and Loops

let numbers = [10, 20, 30, 40];

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log("Sum of array:", sumArray(numbers));

// Exercise 8: Nested Loops

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
  console.log("--------------");
}
