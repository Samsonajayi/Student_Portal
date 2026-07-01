let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num;
    display.value = expression;
}

function appendOperator(op) {
    if (expression !== '' && !isOperator(expression[expression.length - 1])) {
        expression += op;
        display.value = expression;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/', '.'].includes(char);
}

function deleteLastChar() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate() {
    try {
        if (expression === '') return;
        
        // Replace × with * and ÷ with / and − with -
        let calcExpression = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/−/g, '-');
        
        // Evaluate the expression
        let result = eval(calcExpression);
        
        // Round to 10 decimal places to avoid floating point errors
        result = Math.round(result * 10000000000) / 10000000000;
        
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

// Allow keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        event.preventDefault();
        appendOperator(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLastChar();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
