const input = document.getElementById("num");
const output = document.getElementById("output");

document.getElementById("result").addEventListener("click", function () {

    let str = input.value;
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }

    output.textContent = "Number of vowels: " + count;

});