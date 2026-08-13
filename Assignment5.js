const prompt=require('prompt-sync')();
const number1=parseInt(prompt("Enter the first number "));
const number2=parseInt(prompt("Enter the second number "));
const number3=parseInt(prompt("Enter the third number "));
let largest;
if((number1==number2) && (number2==number3))
{
    console.log(`All numbers are equal `);
}
else
{
if(number1>number2)
{
 if (number1>number3)
 {
    largest=number1;
 }
}
else if(number2>number1)
{
    if(number2>number3)
    {
        largest=number2;
    }
}
else
{
    largest=number3;
}
console.log(`The largest number is ${largest}`);
}