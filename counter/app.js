"use strict";


let reset = () => {
    document.querySelector("p").innerHTML = 0;
};

let increse = () => {
    document.querySelector("p").innerHTML = Number(document.querySelector("p").innerHTML) + 1;
};

let decrese = () => {
    document.querySelector("p").innerHTML = Number(document.querySelector("p").innerHTML) - 1;
};


let checkColor = () => {
    let counterNumber = document.querySelector("p").innerHTML;
    if (counterNumber > 0) {
        document.querySelector("p").setAttribute("style", "color: green");
    } else if (counterNumber < 0) {
        document.querySelector("p").setAttribute("style", "color: maroon");
    } else if (counterNumber == 0) {
        document.querySelector("p").setAttribute("style", "color: black");
    }
};

reset();

document.getElementById("inc").addEventListener("click", () => {
    increse();
    checkColor();
});

document.getElementById("dec").addEventListener("click", () => {
    decrese();
    checkColor();
});

document.getElementById("reset").addEventListener("click", () => {
    reset();
    checkColor();
});
