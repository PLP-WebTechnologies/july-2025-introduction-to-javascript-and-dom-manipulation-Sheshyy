// -----------------------------
// Part 1: JavaScript Basics
// -----------------------------

// Variables and conditionals
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult yet.");
}

// -----------------------------
// Part 2: Functions
// -----------------------------

// Function to calculate the total price of items
function calculateTotal(price1, price2) {
  let total = price1 + price2;
  return total;
}

console.log("Total price:", calculateTotal(10, 15));

// Function to greet a user
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Sandra");

// -----------------------------
// Part 3: Loops
// -----------------------------

// For loop example
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// While loop example
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

// -----------------------------
// Part 4: DOM Manipulation
// -----------------------------

// 1. Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("welcome-text").textContent = "The text has been changed!";
});

// 2. Add a new list item
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("itemList").appendChild(newItem);
});

// 3. Toggle color with a class
document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.getElementById("welcome-text").classList.toggle("highlight");
});
