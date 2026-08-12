const prompt = require('prompt-sync')();
const number1=parseFloat(prompt("Enter the  first number: "));
const operator=prompt("Enter any one operator (+,-,*,/) ");
const number2=parseFloat(prompt("Enter the second: "));
let answer;
switch(operator)
{
    case '+':
        answer=number1+number2;
        break;
    case '-':
        answer=number1-number2;
        break;
    case '*':
        answer=number1*number2;
        break;
    case '/':
        if(number2==0)
        {
            answer="Division by zero is not possible";
        }
        else
        {
            answer=number1/number2;
        }
        break;
    default:
        answer="Invalid input entered ";

}
console.log(`Result : ${number1}  ${operator}  ${number2} = ${answer} `);