

let num1 = '';
let num2 = '';
let plus;
let display = document.getElementById('display')

const displayHistory = document.getElementById('displayHistory');
const displayCurrent = document.getElementById('displayCurrent');
const keypad = document.querySelectorAll('.keyboard');
const operatorButtons = document.querySelectorAll('.operators');
let operator = '';
let result = '';

keypad.forEach((button) =>
	button.addEventListener('click', (e) => storeNumbers(e.target))
);

function storeNumbers(input) {
	if (input.classList.contains('numberButton')) {
		numberInput(input);
	} else if (input.classList.contains('decimal')) {
		decimalAdd(input);
	} else if (input.classList.contains('negative')) {
        turnNegative();
    } else if (input.classList.contains('percent')) {
            turnPercent();
    } else if (input.classList.contains('operate')) {
		numberOperate(input);
	} else if (input.classList.contains('equals') && num1 && operator && num2) {
		equalTo();
	} else if (input.classList.contains('clear')) {
		clearDisplay(); 
    }

	updateScreen();
	return;
}

function updateScreen() {
	displayCurrent.innerText = `${num1}${operator}${num2}`;
}


function numberInput (input) {
	if (input.classList.contains('numberButton') && !operator) {
		num1 += input.innerText;
	} else if (input.classList.contains('numberButton') && operator) {
		num2 += input.innerText;
	}   
	return;
}

function numberOperate (input) {
    if (input.classList.contains('operate') && (num2 === '')) {
        operator = input.innerText;
        console.log(operator);
        return;
    } else if (input.classList.contains('operate') && (num2 != '')) {
        console.log("equalto");
        equalTo();
}}

function decimalAdd() {
    num1 = num1.toString();
    num2 = num2.toString();
    
    if ((num1 === '') && (num2 === '')) {
        return
    } else if ((num2 === '') && (num1 != '') && (!num1.includes("."))){
        num1 = num1+".";
        updateScreen();
    } else if ((num1 === '') && (num2 != '') && (!num2.includes("."))){
            num2 = num2+".";
            updateScreen();
    } else if ((num1 != '') && (num2 != '') && (!num2.includes("."))){
        num2 = num2+".";
        updateScreen();
}}

function turnPercent () {
    if ((num1 === '') && (num2 === '')) {
        return
    } else if ((num2 === '') && (num1 != '')){
        num1 = +num1 / 100;
        updateScreen();
    } else if ((num1 === '') && (num2 != '')){
            num2 = +num2 / 100;
            updateScreen();
    } else if ((num1 != '') && (num2 != '')){
        num2 = +num2 / 100;
        updateScreen();
}}

function turnNegative () {
    if ((num1 === '') && (num2 === '')) {
        return
    } else if ((num2 === '') && (num1 != '')){
        num1 = -num1;
        updateScreen();
    } else if ((num1 === '') && (num2 != '')){
            num2 = -num2;
            updateScreen();
    } else if ((num1 != '') && (num2 != '')){
        num2 = -num2;
        updateScreen();
}}

function addition() {
result = parseFloat(num1) + parseFloat(num2);
        return roundNumber(result);
}

function subtraction() {
    result = parseFloat(num1) - parseFloat(num2);
            return roundNumber(result);
}
    
function multiply() {
    result = parseFloat(num1) * parseFloat(num2);
    return roundNumber(result);
}

function divide() {
    result = parseFloat(num1) / parseFloat(num2);
    return roundNumber(result);
}

function equalTo() {
    if (operator === '+'){
    result = addition();
    //result = result.toString();
    displayHistory.innerText = result;
    num2 = '';
    num1 = result;
    } else if (operator === '-') {
        result = subtraction();
        //result = result.toString();
        displayHistory.innerText = result;
        num2 = '';
        num1 = result;
    } else if (operator === '*') {
        result = multiply();
       // result = result.toString();
        displayHistory.innerText = result;
        num2 = '';
        num1 = result;
    } else if (operator === '/') {
        result = divide();
        //result = result.toString();
        displayHistory.innerText = result;
        num2 = '';
        num1 = result;
}}

function clearDisplay() {
    displayHistory.innerText = '';
    num1 = '';
    num2 = '';
    result = '';
    operator = '';
    updateScreen()
    console.log("clear");
}


function roundNumber(result) {
result = result.toFixed(5).replace(/\.?0+$/, '');
return result;
}
// function numberEnter(num) {
//     if (storage.operator === '') {
//     storage.number1.push(num);
//     console.table(storage.number1);
//     num1 = +storage.number1.join("");
//     display.textContent = num1;
 
//     return num1;
//      } else {
//     storage.number2.push(num);
//     console.table(storage);
//     num2 = +storage.number2.join("");
//     display.textContent = num2;
//     return num2;
//      }
// }

// function secondNumber(operator) {
//     storage.operator = operator;
//     console.log(storage.operator);
//     for (i = 0; i < storage.number1.length; i++) {
//         storage.number1[i] = 0
//     }
//     console.table(storage.number1);
// }

// function operate() {
//     if (storage.operator === 'plus') {
//         let num3 = num1 + num2;
//         display.textContent = num3;
//         console.log(num3)
//     } else if (storage.operator === 'minus') {
//         let num3 = num1 - num2;
//         display.textContent = num3;
//         console.log(num3)
// }
// }

// function reset() {
//     storage = {
//         number1: [],
//         number2: [],
//         operator: '',}
//     num1 = 0;
//     num2 = 0;
//     num3 = 0;
//     display.textContent = 0;
// }


    //     inputArray = [];
    //     num2 = num1;
    //     num1 = 0;
    //     if (operator === "plus") {
    //         operate(num1, num2)


    // inputArray.push(num)
    // num1 = +inputArray.join("");
    // console.log(num1);
    // display.textContent = num1;
    // return num1;
    //const box = document.createElement('div');
    // num1.setAttribute('class', 'digit')
    // display.appendChild(num1);

    // display
    // var paragraph = document.querySelector("p");
    // paragraph.textContent += "This just got added"

// function secondNumber(operator) {
//     inputArray = [];
//     num2 = num1;
//     num1 = 0;
//     if (operator === "plus") {
//         operate(num1, num2)
//     return operator, num2
    // secondInputArray = inputArray;
    // inputArray = [];
    // num1 = 0;
    // num2 = +secondInputArray.join("");
    // if (operator === "plus") {
    //     operate(num1, num2)
    //     console.log("hello");
    // }
    // if (operator === "minus") {
    
    //     console.log("hello");
    //     console.log(num1);
    // return num2;
// }


// function operate(operator) {
//     if (operator === "plus") {
//         //     operate(num1, num2)
//         //     console.log("hello");
//         // }
// }




// const sum = function(Arr) {
//   let initialValue = 0;
// 	let newArr = Arr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue
   
// )
// return newArr;
// };

// const multiply = function(array) {

//   return array.length
//   ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
//   : 0;

// };



