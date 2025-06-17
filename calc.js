alert("Here you will enter two numbers and perform operations such as addition, subtraction, division, and multiplication. \n \n Click OK to continue!");

const firstNumber = parseInt(prompt("Enter the first number"));
const secondNumber = parseInt(prompt("Enter the second number"));

const operation = prompt(`Which operation would you like to perform on ${firstNumber} and ${secondNumber}? \n 'Divide' 'Multiply' 'Add' 'Subtract':`);

switch (operation) {
    case "Divide":
        alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
        break;
    case "Multiply":
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
    case "Add":
        alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
        break;
    case "Subtract":
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
    default:
        alert("Please select a valid operation!");
}