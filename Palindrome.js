const number = document.getElementById("num1");
const output = document.getElementById("output");

document.getElementById("result").addEventListener("click", function () {

    let num = number.value;
    let reverse = "";

    for (let i = num.length - 1; i >= 0; i--) {
        reverse += num[i];
    }

    if (num === reverse) {
        output.textContent = num + " is a Palindrome";
    }
    else {
        output.textContent = num + " is not a Palindrome";
    }

});