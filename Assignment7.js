const prompt=require(`prompt-sync`)();
const year=prompt("Enter the year to be checked ");
if((((year % 4)==0)&&((year % 100)!=0))||((year%400)==0))
{
console.log(`The year ${year} is leap year `);
}
else{
    console.log(`The year ${year} is not leap year`);
}
