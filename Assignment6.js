const prompt=require('prompt-sync')();
const marks=parseInt(prompt("Enter the marks "));
let grade;
if(marks>=90)
{
    grade="A";
}
else if((marks>=75) && (marks<=90))
{
    grade="B";
}
else if((marks>=60) &&(marks<=75))
{
    grade="C";
}
else if((marks>=40) &&(marks<=60))
{
    grade="D";
}
else{
    grade="Fail";
}
console.log(`The grade according to marks is ${grade}`);

