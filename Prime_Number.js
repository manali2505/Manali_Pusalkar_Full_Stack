const number1=document.getElementById("num1");
let answer=document.getElementById("output");

document.getElementById("result").addEventListener("click",function(){
let num=Number(number1.value);
let count=0
for(let i=2;i<num;i++)
{
    if((num%i)==0)
    {
        count=count+1;
    }
}
if(count==0)
{
    answer.textContent=" Number is prime";
}
else{
    answer.textContent=" Number is not prime";
}
});