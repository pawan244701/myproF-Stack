const turnOrder = [ 'red', 'blue', 'yellow', 'green' ];
let currentTurnIindex = 0;

const displayDice = document.getElementById('btn113');

const playRed = document.getElementById('playRed');
const playBlue = document.getElementById('playBlue');
const playGreen = document.getElementById('playGreen');
const playYellow = document.getElementById('playYellow');

function diceRoll(playerColor) {
    const activePlayer = turnOrder[currentTurnIindex];
    if(playerColor !== activePlayer) return;

    displayDice.innerHTML = "";
    displayDice.style.backgroundColor = "#605252"
    setTimeout(function() {
        const currentDiceValue = Math.floor(Math.random() * 6) + 1;
        displayDice.innerHTML = currentDiceValue;
        displayDice.style.backgroundColor = playerColor;
        displayDice.style.color = 'white';
        displayDice.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
        console.log(playerColor + " dice roll: ", currentDiceValue);
        
        if(displayDice.innerHTML !== '6'){
            currentTurnIindex = (currentTurnIindex + 1 ) % 4;
        } else {
            currentTurnIindex = currentTurnIindex;
        }
    }, 150);
}


playRed.addEventListener('click', function() { diceRoll('red'); });
playBlue.addEventListener('click', function() { diceRoll('blue'); });
playGreen.addEventListener('click', function() { diceRoll('green'); });
playYellow.addEventListener('click', function() { diceRoll('yellow'); });

/*
if (btn112 === 4red)
    btn113 = WIN(color="red")
else if(btn114 === 4yellow)
    btn113 = WIN(color="yellow")
else if(btn098 === 4blue)
    btn113 = WIN(color"blue")
else
    btn113 = WIN(color="green")

finaly = pritn{
    score: 1(color), 2(color), 3(color)
}
*/