function add(x, y) {
    return Number(Math.round(x + y + "e5") + "e-5").toString();
}

function subtract(x, y) {
    return Number(Math.round(x - y + "e5") + "e-5").toString();
}

function multiply(x, y) {
    return Number(Math.round(x * y + "e5") + "e-5").toString();
}

function divide(x, y) {
    if (y === 0) {
        return "Nice Try!";
    }
    return Number(Math.round(x / y + "e5") + "e-5").toString();
}

function operate(x, y, op) {
    switch (op) {
        case "+":
            return add(Number(x), Number(y));
        case "-":
            return subtract(Number(x), Number(y));
        case "×":
            return multiply(Number(x), Number(y));
        case "÷":
            return divide(Number(x), Number(y));
        default:
            alert("Operator Error");
    }
}

let firstNumber = "0";
let secondNumber = "";
let operator;
let operatorPressed = false;
let equalPressed = false;

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const sign = document.querySelector("#sign");
const decimal = document.querySelector("#decimal");

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (operatorPressed) {
            if (secondNumber === "0") {
                secondNumber = number.textContent;
                display.textContent = secondNumber;
            } else {
                secondNumber += number.textContent;
                display.textContent = secondNumber;
            }
        } else {
            if (equalPressed || firstNumber === "0") {
                firstNumber = number.textContent;
                display.textContent = firstNumber;
                equalPressed = false;
            } else {
                firstNumber += number.textContent;
                display.textContent = firstNumber;
            }
        }
        
    });
});

operators.forEach(op => {
    op.addEventListener("click", () => {
        const prevOperator = operator;
        operator = op.textContent;
        if (operatorPressed && secondNumber) {
            firstNumber = operate(firstNumber, secondNumber, prevOperator);
            display.textContent = firstNumber;
            secondNumber = "";
        } else {
            operatorPressed = true;
            secondNumber = "";
        }
    });
});

equal.addEventListener("click", () => {
    if (operatorPressed || operator) {
        if (!secondNumber) {
            secondNumber = firstNumber;
        }
        firstNumber = operate(firstNumber, secondNumber, operator);
        display.textContent = firstNumber;
        operatorPressed = false;
    }
    equalPressed = true;
});

clear.addEventListener("click", () => {
    firstNumber = "0";
    secondNumber = "";
    operator = null;
    operatorPressed = false;
    equalPressed = false;
    display.textContent = firstNumber;
});

sign.addEventListener("click", () => {
    if (operatorPressed) {
        if (secondNumber && secondNumber !== "0") {
            secondNumber = secondNumber.at(0) === "-" ? secondNumber.slice(1) : "-" + secondNumber;
            display.textContent = secondNumber;
        }
    } else {
        if (firstNumber !== "0") {
            firstNumber = firstNumber.at(0) === "-" ? firstNumber.slice(1) : "-" + firstNumber;
            display.textContent = firstNumber;
        }
    }
});

decimal.addEventListener("click", () => {
    if (operatorPressed) {
        if (!secondNumber.includes(".")) {
            secondNumber = secondNumber === "" ? "0." : secondNumber + ".";
            display.textContent = secondNumber;
        }
    } else {
        if (!firstNumber.includes(".")) {
            firstNumber = firstNumber + ".";
            display.textContent = firstNumber;
        }
    }
});