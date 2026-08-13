const prompt=require(`prompt-sync`)();
const number=parseInt(prompt("Enter the number: "));
let temp=Math.abs(number);
let sum=0;
//let rem;
while(temp>0)
{
    sum+=temp%10;
    temp=Math.floor(temp/10);

}
console.log(`The sum of digits of the number ${number} is ${sum}`);