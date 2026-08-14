const number1 = document.getElementById("num1");
let answer = document.getElementById("output");

document.getElementById("result").addEventListener("click", function() {

    let num = Number(number1.value);

    answer.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        answer.innerHTML += num + " X " + i + " = " + (num * i) + "<br>";
    }

});