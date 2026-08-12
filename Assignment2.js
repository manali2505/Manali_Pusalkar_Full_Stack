const prompt=require('prompt-sync')();
let number1=parseInt(prompt("Enter the first number "));
let number2=parseInt(prompt("Enter the second number "));
number1=number1+number2;
number2=number1-number2;
number1=number1-number2;
console.log("After swapping numbers without third variable:");
console.log(`First Number is ${number1}`);
console.log(`Second Number is ${number2}`);
