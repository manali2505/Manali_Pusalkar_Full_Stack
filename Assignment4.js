const prompt=require('prompt-sync')();
const number=parseInt(prompt("Enter the number: "));
if(number==0)
{
    console.log("The number entered as input is 0 ");
}
else{
    if((number%2)==0)
    {
        console.log(`The number ${number} is even `);
    }
    else{
        console.log(`The number ${number} is odd `);
    }
}