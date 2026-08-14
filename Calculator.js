//const prompt = require('prompt-sync')();
const number1=document.getElementById("num1");
const oper=document.getElementById("operator");
const number2=document.getElementById("num2");
let answer=document.getElementById("output");
document.getElementById("result").addEventListener("click",function(){
let a=Number(number1.value);
let b=Number(number2.value);
let o=oper.value;
switch(o)
{
case '+':
        answer.textContent="Result: "+(a+b);
        break;
    case '-':
        answer.textContent="Result: "+(a-b);
        break;
    case '*':
        answer.textContent="Result: "+(a*b);
        break;
    case '/':
        if(b==0)
        {
            answer.textContent="Result: "+"Division by zero is not possible";
        }
        else
        {
            answer.textContent="Result: "+(a/b);
        }
        break;
    default:
        answer.textContent="Result: "+"Invalid input entered ";
}
});
