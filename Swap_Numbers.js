
let number1=document.getElementById("num1");
let number2=document.getElementById("num2");
let o1=document.getElementById("output1");
let o2=document.getElementById("output2");
document.getElementById("result").addEventListener("click",function(){
let a=Number(number1.value);
let b=Number(number2.value);
a=a+b;
b=a-b;
a=a-b;
o1.textContent="First Number after swapping : "+ a;
o2.textContent="Second Number after swapping : "+ b;
});


// console.log("After swapping numbers without third variable:");
// console.log(`First Number is ${number1}`);
// console.log(`Second Number is ${number2}`);
