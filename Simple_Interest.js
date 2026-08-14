
let principal=document.getElementById("p");
let rate=document.getElementById("r");
let time=document.getElementById("t");

let o1=document.getElementById("output1");
let o2=document.getElementById("output2");
document.getElementById("result").addEventListener("click",function(){
let a=Number(principal.value);
let b=Number(rate.value);
let c=Number(time.value);
if((c<=0) || (b<=0) || (a<=0))
{
    o1.textContent="Simple Interest: "+"Inappropriate Inputs";
    o2.textContent="Total Amount: "+"Inappropriate Inputs";
}
else
{
let simpleinterest=((a*b*c)/100);
let totalamount=a+simpleinterest;
o1.textContent="Simple Interest: "+ simpleinterest;
o2.textContent="Total Amount: "+ totalamount;
// console.log(`Simple Interest : ${simpleinterest}`);
// console.log(`Total Amount : ${totalamount}`);


}
});



