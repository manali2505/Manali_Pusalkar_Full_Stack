const prompt=require(`prompt-sync`)();
let number=parseInt(prompt("Enter the number"));
let reversed=0;
while(number>0)
{
    let temp=number%10;
    number=Math.floor(number/10);
    reversed=reversed*10+temp;
    //num=Math.floor(num/10);

}
console.log(`Reversed number is ${reversed}`);