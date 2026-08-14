let number=document.getElementById("num");

let o=document.getElementById("output");
document.getElementById("result").addEventListener("click",function(){
let a=Number(number.value);
if(a==0)
{
    o.textContent="Result: "+ "The number entered as input is 0 ";
}
else{
    if((a%2)==0)
    {
       o.textContent="Result: "+ "The number entered as input is even  ";
    }
    else{
       o.textContent="Result: "+ "The number entered as input is odd  ";
    }
}
});