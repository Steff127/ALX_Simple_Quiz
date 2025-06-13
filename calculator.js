// Arithmetic functions
function add(number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
}

function subtract(number1, number2) {
    return parseFloat(number1) - parseFloat(number2);
}

function multiply(number1, number2) {
    return parseFloat(number1) * parseFloat(number2);
}

function divide(number1, number2) {
    return parseFloat(number2) !== 0 ? parseFloat(number1) / parseFloat(number2) : "Cannot divide by zero!";
}

// Get input fields and result display
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const resultDisplay = document.getElementById("calculation-result");

// Attach event listeners to buttons
document.getElementById("add").addEventListener("click", function() {
    resultDisplay.textContent = add(num1.value, num2.value);
});

document.getElementById("subtract").addEventListener("click", function() {
    resultDisplay.textContent = subtract(num1.value, num2.value);
});

document.getElementById("multiply").addEventListener("click", function() {
    resultDisplay.textContent = multiply(num1.value, num2.value);
});

document.getElementById("divide").addEventListener("click", function() {
    resultDisplay.textContent = divide(num1.value, num2.value);
});
