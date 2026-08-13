const prompt=require(`prompt-sync`)();
const number=parseInt(prompt("Enter the number from 1 to 10 "));
for(let i=1;i<=10;i++)
{
    console.log(`${number} X ${i} = ${number *i}`);
}