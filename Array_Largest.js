const input = document.getElementById("num");
const output = document.getElementById("output");

document.getElementById("result").addEventListener("click", function () {

    let arr = input.value.split(",").map(Number);

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    output.textContent = "Largest element: " + largest;

});