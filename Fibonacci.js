const number1=document.getElementById("num1");
let answer=document.getElementById("output");

document.getElementById("result").addEventListener("click",function(){
let terms=Number(number1.value);

let a = 0;
let b = 1;
answer.innerHTML="";
for (let i = 1; i <= terms; i++) {
    answer.innerHTML+=a+" ";

    let next = a + b;
    a = b;
    b = next;
}
});