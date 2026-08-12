const prompt=require('prompt-sync')();
let principal=parseFloat(prompt("Enter the principal amount (P) "));
let rate=parseFloat(prompt("Enter the annual rate of interest in % "));
let time=parseFloat(prompt("Enter the time in years "));

if((rate<=0) || (time<=0) || (principal<=0))
{
    console.log("Inappropriate Inputs");
}
else
{
let simpleinterest=((principal*rate*time)/100);
let totalamount=principal+simpleinterest;
console.log(`Simple Interest : ${simpleinterest}`);
console.log(`Total Amount : ${totalamount}`);


}

