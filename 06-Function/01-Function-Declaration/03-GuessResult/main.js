
// Global variable
let message = "Welcome to Thailand";


function logMessage(message) {
  // Local variable
  message = "Hello everybody";
  console.log(message); // * Log. hello everybody
}
logMessage(message);
console.log(message); // ** // Log. welcome to thailand B

let name = "John";

function sayHi(input) {
  console.log(name); // *** Log. John bec ไม่เจอ name ใน local
  name = input;
}
sayHi();
console.log(name); // **** Log. undefined 