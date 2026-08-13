const prompt=require(`prompt-sync`)();
const number=parseInt(prompt("Enter the number to check if it is prime "));
let count=0
for(let i=2;i<number;i++)
{
    if((number%i)==0)
    {
        count=count+1;
    }
}
if(count==0)
{
    console.log(`Number is prime `);
}
else{
    console.log(`Number is not prime `);
}