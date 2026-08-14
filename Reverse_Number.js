const number1 = document.getElementById("num1");
let answer = document.getElementById("output");

document.getElementById("result").addEventListener("click", function() {
    let number=Math.abs(Number(number1.value));
    reversed=0;
    while(number>0)
    {
    let temp=number%10;
    number=Math.floor(number/10);
    reversed=reversed*10+temp;
    //num=Math.floor(num/10);

    }
    
    answer.textContent="Reverse Number "+ reversed;

   

});