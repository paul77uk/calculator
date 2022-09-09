var displayValue = "";
var displayValue2 = "";
var total = "";
var operator = null;

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const display = document.querySelector('.cal-display');
const clear = document.querySelector('.clear-button');
const plus = document.querySelector('.plus-button');
const minus = document.querySelector('.minus-button');
const multiplyButton = document.querySelector('.multiply-button');
const division = document.querySelector('.division-button');
const equals = document.querySelector('.equals-button');
const dot = document.querySelector('.dot');

const add = (a, b) => (a + b); 
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => 
operator === '+' ? add(a, b) :
operator === '-' ? subtract(a, b):
operator === 'x' ? multiply(a, b) :
operator === '/' ? divide(a, b) :
null;

const numberListener = (num) => {
    num.addEventListener('click', () => {
        // var number = "";
        displayValue2 += num.textContent;
        display.textContent = displayValue2;
        // displayValue === null ? displayValue = number : displayValue2 = number;
    });
}

const operatorListener = (operatorSign) => {
    operatorSign.addEventListener('click', () => {
        operator = operatorSign.textContent;
        displayValue = displayValue2;
        displayValue2 = "";
    });
}

numberListener(zero);
numberListener(one);
numberListener(two);
numberListener(three);
numberListener(four);
numberListener(five);
numberListener(six);
numberListener(seven);
numberListener(eight);
numberListener(nine);
numberListener(dot);

// zero.addEventListener('click', () => {
//     var num = zero.textContent;
//     display.textContent = num;
   
//     displayValue === null ? displayValue = num : displayValue2 = num;
    
// });

// eight.addEventListener('click', () => {
//     var num = eight.textContent;
//     display.textContent = num;
   
//     displayValue === null ? displayValue = num : displayValue2 = num;
// });

operatorListener(plus);
operatorListener(minus);
operatorListener(multiplyButton);
operatorListener(division);

// plus.addEventListener('click', () => {
//     operator = plus.textContent;
// });

// minus.addEventListener('click', () => {
//     operator = minus.textContent;
// });

// multiplyButton.addEventListener('click', () => {
//     operator = multiplyButton.textContent;
// });

// division.addEventListener('click', () => {
//     operator = division.textContent;
// });

equals.addEventListener('click', () => {
    display.textContent = operate(operator, Number(displayValue), Number(displayValue2))
    console.log(display.textContent);
    displayValue2 = display.textContent;
    displayValue = "";
});

clear.addEventListener('click', () => {
    display.textContent = "";
    displayValue = "";
    displayValue2 = "";
    operator = null;
});

// pseudocode
// get input and save it in variable displayValue2 and display it in display.
// operator press is saved
// then displayValue2 is transfered to displayValue1
// on = press calculation is made and total is saved to displayValue2
