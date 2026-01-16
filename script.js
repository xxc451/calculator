function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
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