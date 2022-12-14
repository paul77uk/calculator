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
const backButton = document.querySelector('.back-button');

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
        if (displayValue2.includes('.')) {
            if (num.textContent !== '.'){
                displayValue2 += num.textContent;
                display.textContent = displayValue2;
            }
        } else {
            displayValue2 += num.textContent;
            display.textContent = displayValue2;
        }
        
        
    });
}

const operatorListener = (operatorSign) => {
    operatorSign.addEventListener('click', () => {
        operator = operatorSign.textContent;
        displayValue = displayValue2;
        displayValue2 = "";
    });
}

const calculate = () => {
    if (displayValue == "") {
        display.textContent = displayValue2;
    } else {
        display.textContent = operate(operator, Number(displayValue), Number(displayValue2))
        console.log(display.textContent);
        displayValue2 = operate(operator, Number(displayValue), Number(displayValue2))
        displayValue = "";
    }
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

operatorListener(plus);
operatorListener(minus);
operatorListener(multiplyButton);
operatorListener(division);

equals.addEventListener('click', () => {
    calculate();
});

clear.addEventListener('click', () => {
    display.textContent = "";
    displayValue = "";
    displayValue2 = "";
    operator = null;
});

backButton.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
    displayValue2 = display.textContent;
    console.log(display.textContent.length);
});

// pseudocode
// get input and save it in variable displayValue2 and display it in display.
// operator press is saved
// then displayValue2 is transfered to displayValue1
// on = press calculation is made and total is saved to displayValue2
