const number1=document.getElementById("num1");
const number2=document.getElementById("num2");
const number3=document.getElementById("num3");

document.getElementById("result").addEventListener("click",function(){
let a=Number(number1.value);
let b=Number(number2.value);
let c=Number(number3.value);
let answer=document.getElementById("output");
if((a==b) && (b==c))
{
   answer.textContent="All numbers are equal ";
}
else
{
if(a>b)
{
 if (a>c)
 {
    answer.textContent="Largest Number "+ a;
   
 }
}
else if(b>a)
{
    if(b>c)
    {
        answer.textContent="Largest Number "+ b;
      //  largest=number2;
    }
}
else
{
    answer.textContent="Largest Number "+ c;
   // largest=number3;
}
//console.log(`The largest number is ${largest}`);
}


});
