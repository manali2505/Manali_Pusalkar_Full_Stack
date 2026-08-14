const number1=document.getElementById("num1");
let answer=document.getElementById("output");

document.getElementById("result").addEventListener("click",function(){
let marks=Number(number1.value);
if(marks>=90)
{
    answer.textContent="Grade: "+"A";
}
else if((marks>=75) && (marks<=90))
{
    answer.textContent="Grade: "+"B";
}
else if((marks>=60) &&(marks<=75))
{
    answer.textContent="Grade: "+"C";
}
else if((marks>=40) &&(marks<=60))
{
    answer.textContent="Grade: "+"D";
}
else{
    answer.textContent="Grade: "+"Fail";
}

});