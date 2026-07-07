// GLOBEL declarations
const players = ['red', 'blue', 'yellow', 'green'];
let currentTurnIindex = 0;
const trackPath = ['btn092', 'btn093', 'btn094', 'btn095', 'btn096', 'btn082', 'btn067', 'btn052', 'btn037', 'btn022', 'btn007', 'btn008', 'btn009', 'btn024', 'btn039', 'btn054', 'btn069', 'btn084', 'btn100', 'btn101', 'btn102', 'btn103', 'btn104', 'btn105', 'btn120', 'btn135', 'btn134', 'btn133', 'btn132', 'btn131', 'btn130', 'btn144', 'btn159', 'btn174', 'btn189', 'btn204', 'btn219', 'btn218', 'btn217', 'btn202', 'btn187', 'btn172', 'btn157', 'btn142', 'btn126', 'btn125', 'btn124', 'btn123', 'btn122', 'btn121', 'btn106', 'btn091'];
const trackPathRed = ['btn092', 'btn093', 'btn094', 'btn095', 'btn096', 'btn082', 'btn067', 'btn052', 'btn037', 'btn022', 'btn007', 'btn008', 'btn009', 'btn024', 'btn039', 'btn054', 'btn069', 'btn084', 'btn100', 'btn101', 'btn102', 'btn103', 'btn104', 'btn105', 'btn120', 'btn135', 'btn134', 'btn133', 'btn132', 'btn131', 'btn130', 'btn144', 'btn159', 'btn174', 'btn189', 'btn204', 'btn219', 'btn218', 'btn217', 'btn202', 'btn187', 'btn172', 'btn157', 'btn142', 'btn126', 'btn125', 'btn124', 'btn123', 'btn122', 'btn121', 'btn106', 'btn107', 'btn108', 'btn109', 'btn110', 'btn111', 'btn112'];
const trackPathBlue = ['btn024', 'btn039', 'btn054', 'btn069', 'btn084', 'btn100', 'btn101', 'btn102', 'btn103', 'btn104', 'btn105', 'btn120', 'btn135', 'btn134', 'btn133', 'btn132', 'btn131', 'btn130', 'btn144', 'btn159', 'btn174', 'btn189', 'btn204', 'btn219', 'btn218', 'btn217', 'btn202', 'btn187', 'btn172', 'btn157', 'btn142', 'btn126', 'btn125', 'btn124', 'btn123', 'btn122', 'btn121', 'btn106', 'btn091', 'btn092', 'btn093', 'btn094', 'btn095', 'btn096', 'btn082', 'btn067', 'btn052', 'btn037', 'btn022', 'btn007', 'btn008', 'btn023', 'btn038', 'btn023', 'btn053', 'btn068', 'btn083', 'btn098'];
const trackPathYellow = ['btn134', 'btn133', 'btn132', 'btn131', 'btn130', 'btn144', 'btn159', 'btn174', 'btn189', 'btn204', 'btn219', 'btn218', 'btn217', 'btn202', 'btn187', 'btn172', 'btn157', 'btn142', 'btn126', 'btn125', 'btn124', 'btn123', 'btn122', 'btn121', 'btn106', 'btn091', 'btn092', 'btn093', 'btn094', 'btn095', 'btn096', 'btn082', 'btn067', 'btn052', 'btn037', 'btn022', 'btn007', 'btn008', 'btn009', 'btn024', 'btn039', 'btn054', 'btn069', 'btn084', 'btn100', 'btn101', 'btn102', 'btn103', 'btn104', 'btn105', 'btn120', 'btn119', 'btn118', 'btn117', 'btn116', 'btn115', 'btn114'];
const trackPathGreen = ['btn202', 'btn187', 'btn172', 'btn157', 'btn142', 'btn126', 'btn125', 'btn124', 'btn123', 'btn122', 'btn121', 'btn106', 'btn091', 'btn092', 'btn093', 'btn094', 'btn095', 'btn096', 'btn082', 'btn067', 'btn052', 'btn037', 'btn022', 'btn007', 'btn008', 'btn009', 'btn024', 'btn039', 'btn054', 'btn069', 'btn084', 'btn100', 'btn101', 'btn102', 'btn103', 'btn104', 'btn105', 'btn120', 'btn135', 'btn134', 'btn133', 'btn132', 'btn131', 'btn130', 'btn144', 'btn159', 'btn174', 'btn189', 'btn204', 'btn219', 'btn218', 'btn203', 'btn188', 'btn173', 'btn158', 'btn143', 'btn128'];
const openingCellIds = { red: 'btn092', blue: 'btn024', yellow: 'btn134', green: 'btn202' };
const homePathEnterence = { red: 'btn093', blue: 'btn039', yellow: 'btn133', green: 'btn187' };
const winningCellIds = { red: 'btn112', blue: 'btn098', yellow: 'btn114', green: 'btn128' };

const redTokenHome = ['btn017', 'btn020', 'btn062', 'btn065'];
const blueTokenHome = ['btn026', 'btn029', 'btn071', 'btn074'];
const yellowTokenHome = ['btn161', 'btn164', 'btn206', 'btn209'];
const greenTokenHome = ['btn155', 'btn152', 'btn200', 'btn197'];

const playerHomeMaping = { red: redTokenHome, blue: blueTokenHome, yellow: yellowTokenHome, green: greenTokenHome };
const playerTokenIds = {
    red: ['redToken1', 'redToken2', 'redToken3', 'redToken4'],
    blue: ['blueToken1', 'blueToken2', 'blueToken3', 'blueToken4'],
    yellow: ['yellowToken1', 'yellowToken2', 'yellowToken3', 'yellowToken4'],
    green: ['greenToken1', 'greenToken2', 'greenToken3', 'greenToken4']
};
const diceNormalValue = 0;
let hasRolled = false;

// getting HTML elements
const displayDice = document.getElementById('btn113');
const playRedBtn = document.getElementById('playRedBtn');
const playBlueBtn = document.getElementById('playBlueBtn');
const playYellowBtn = document.getElementById('playYellowBtn');
const playGreenBtn = document.getElementById('playGreenBtn');

// DICE rolling
function diceRoll(clickedPlayerColor) {
    const activePlayer = players[currentTurnIindex];
    if (clickedPlayerColor !== activePlayer) {
        return;
    }
    if (hasRolled === true) {
        console.log("move token first!");
        return;
    }
    displayDice.innerHTML = "";
    displayDice.style.backgroundColor = "#923d3d";
    setTimeout(function () {
        const rolledDiceValue = Math.floor(Math.random() * 6) + 1;
        displayDice.innerHTML = rolledDiceValue;
        displayDice.style.backgroundColor = clickedPlayerColor;
        displayDice.style.color = 'white';
        displayDice.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
        console.log(clickedPlayerColor + ' got ', rolledDiceValue);
        hasRolled = true;

        if (rolledDiceValue != '6') {
            const currentHomeCells = playerHomeMaping[clickedPlayerColor];
            const currentTokenIds = playerTokenIds[clickedPlayerColor];
            let homeCount = 0;

            currentTokenIds.forEach(function (tokenId) {
                const tokenElement = document.getElementById(tokenId);
                if (tokenElement) {
                    if (currentHomeCells.includes(tokenElement.parentElement.id)) {
                        homeCount++;
                    }
                }
            });
            if (homeCount === 4) {
                console.log(clickedPlayerColor + " has no tokken out giving chance to next player ");
                hasRolled = false;
                currentTurnIindex = (currentTurnIindex + 1) % 4;
                return;
            }
        }
    }, 150);
}

// CLICK token
function tokenClickHandler(clickedToken) {
    if (hasRolled === false) return;
    if (!clickedToken.id.includes(players[currentTurnIindex])) {
        return;
    }
    const activePlayer = players[currentTurnIindex];
    const currentCellIds = clickedToken.parentElement.id;
    const homeCells = playerHomeMaping[activePlayer];

    if (homeCells.includes(currentCellIds)) {
        console.log(`printing ${clickedToken}`);
        if (displayDice.innerHTML !== '6') {
            currentTurnIindex = (currentTurnIindex + 1) % 4;
            hasRolled = false;
            return;
        } else {
            const startingCellId = openingCellIds[activePlayer];
            const startingCellElement = document.getElementById(startingCellId);
            startingCellElement.appendChild(clickedToken);
            hasRolled = false;
        }
    }
}


// add EVENTLISTENERS
playRedBtn.addEventListener('click', () => diceRoll('red'));
playBlueBtn.addEventListener('click', () => diceRoll('blue'));
playGreenBtn.addEventListener('click', () => diceRoll('green'));
playYellowBtn.addEventListener('click', () => diceRoll('yellow'));

const allTokens = document.querySelectorAll('.token');
allTokens.forEach(function (token) {
    token.addEventListener('click', function () {
        tokenClickHandler(token);
    });
});