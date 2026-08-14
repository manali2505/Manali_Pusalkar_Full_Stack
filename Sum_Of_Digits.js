const number1 = document.getElementById("num1");
let answer = document.getElementById("output");

document.getElementById("result").addEventListener("click", function() {
    let temp=Math.abs(Number(number1.value));
    sum=0;
//let rem;
    while(temp>0)
    {
    sum+=temp%10;
    temp=Math.floor(temp/10);

    }
    answer.textContent="Sum of Digits is "+ sum;

   

});