"use strict";


let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;


let operate = (a,b, operation) => {
    a = Number(a);
    b = Number(b);
    if (operation === "add") {
        return add(a,b);
    } else if (operation === "sub") {
        return subtract(a,b);
    } else if (operation === "mul") {
        return multiply(a,b);
    } else if (operation === "div") {
        return divide(a,b);
    } else {
        return null;
    }
};

let operationString = "";
let resultArr = [];
let paragraph = document.getElementById("resultWindow");
let text;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
            operationString += button.textContent;
            text = document.createTextNode(` ${button.textContent} `);
            paragraph.appendChild(text);
        });
});

const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach((operation) => {
        operation.addEventListener("click", () => {
            if (!(operationString === "")) {
                resultArr.push(operationString);
                operationString = "";
                if (operation.textContent == "add") {
                    resultArr.push("add");
                } else if (operation.textContent == 'sub') {
                    resultArr.push("sub");
                } else if (operation.textContent == 'mul') {
                    resultArr.push("mul");
                } else if (operation.textContent == 'div') {
                    resultArr.push("div");
                }

                text = document.createTextNode(` ${operation.textContent} `);
                paragraph.appendChild(text);
            } else {
                alert("enter a number first or if you entered two numbers and operation press equals");
            }
        })
});


const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    alert(`result is: ${operate(resultArr[0],resultArr[2],resultArr[1])}`);
    resultArr = [];
    paragraph.innerHTML = "";
});
