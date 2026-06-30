/*
    name : pawan yadav
    project : basic cal
    date : 12 june 2026
*/

// disp : variable 
const disp = document.getElementById('display');

function appendToDisplay(val) {
    const opCount = document.getElementsByClassName('op-btn');
    const opArr = [];

    for(let i = 0; i < opCount.length; i++) {
        opArr.push(opCount[i].innerText);
    }
    const lastChar = disp.value.slice(-1);

    if (opArr.includes(val) && opArr.includes(lastChar)) {
        disp.value=disp.value.slice(0, -1) + val;
    } else {
        disp.value+=val;
    }
}

function backspace() {
    disp.value=disp.value.slice(0, -1);
}

function clearDisplay(){
    disp.value="";
}

function calculate() {
    try {
        disp.value=eval(disp.value);
    } catch (error) {
        disp.value="error"
    }
}
