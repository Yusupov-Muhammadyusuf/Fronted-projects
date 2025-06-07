const C = document.getElementById('removeButton');
const input = document.getElementById('CalculateInput');
const plus = document.getElementById('plusButton');
const minus = document.getElementById('minusButton');
const times = document.getElementById('timesButton');
const divide = document.getElementById('divideButton');
const equals = document.getElementById('equelsButton');

C.addEventListener('click', () => {
    input.value = '';
})

let firstNumber = '';
let operator = '';
let secondNumber = '';

// Raqam tugmalari bosilganda inputga qo‘shamiz
const numberButtons = document.querySelectorAll('.button');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.innerText;
        if (val >= '0' && val <= '9') {
            input.value += val;
        }
    });
});

plus.addEventListener('click', () => {
    firstNumber = input.value;
    operator = '+';
    input.value = '';
});

minus.addEventListener('click', () => {
    firstNumber = input.value;
    operator = '-';
    input.value = '';
})

times.addEventListener('click', () => {
    firstNumber = input.value;
    operator = '*';
    input.value = '';
})

divide.addEventListener('click', () => {
    firstNumber = input.value;
    operator = '/';
    input.value = '';
})

equals.addEventListener('click', () => {
    secondNumber = input.value;
     let result = 0;

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

     switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
     }

     input.value = result;
})