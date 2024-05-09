// Selecionar elementos do DOM
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let resultSpan = document.getElementById("result");

// Função para somar
function add(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 + num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

// Função para subtrair
function subtract(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 - num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

// Função para multiplicar
function multiply(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 * num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

// Função para dividir
function divide(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        let result = num1 / num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

// Adicionar ouvintes de evento aos botões
addButton.addEventListener("click", function() {
    add(parseFloat(num1Input.value), parseFloat(num2Input.value));
});
subtractButton.addEventListener("click", function() {
    subtract(parseFloat(num1Input.value), parseFloat(num2Input.value));
});
multiplyButton.addEventListener("click", function() {
    multiply(parseFloat(num1Input.value), parseFloat(num2Input.value));
});
divideButton.addEventListener("click", function() {
    divide(parseFloat(num1Input.value), parseFloat(num2Input.value));
});
