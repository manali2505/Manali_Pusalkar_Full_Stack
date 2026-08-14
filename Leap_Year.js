const number1=document.getElementById("num1");
let answer=document.getElementById("output");

document.getElementById("result").addEventListener("click",function(){
let year=Number(number1.value);
if((((year % 4)==0)&&((year % 100)!=0))||((year%400)==0))
{
answer.textContent="The year "+year+" is leap year.";
}
else{
   answer.textContent="The year "+year+" is not leap year.";
}
});