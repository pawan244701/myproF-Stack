// GLOBEL declarations
const players = ['red', 'blue', 'yellow', 'green'];
let currentTurnIindex = 0;
const safeZones = ['btn092', 'btn037', 'btn024', 'btn103', 'btn134', 'btn189', 'btn202', 'btn123'];
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

const playerTracks = {
    red: trackPathRed,
    blue: trackPathBlue,
    yellow: trackPathYellow,
    green: trackPathGreen
};

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

        // condition checking if token in winLIne waiting for 2 player got 5 other tokens are in home than pass the turn
        let canMoveTokenAtLeastOne = false;
        playerTokenIds[clickedPlayerColor].forEach(function (tokenId) {
            let tokenEle = document.getElementById(tokenId);
            if (tokenEle) {
                let currentCellIdentity = tokenEle.parentElement.id;
                if (playerHomeMaping[clickedPlayerColor].includes(currentCellIdentity)) {
                    if (rolledDiceValue === 6) {
                        canMoveTokenAtLeastOne = true;
                    }
                } else {
                    if (currentCellIdentity !== winningCellIds[clickedPlayerColor]) {
                        const currentTrack = playerTracks[clickedPlayerColor];
                        const currentIndex = currentTrack.indexOf(currentCellIdentity);

                        if (currentIndex !== -1) {
                            const targetIndex = currentIndex + rolledDiceValue;
                            if (targetIndex < currentTrack.length) {
                                canMoveTokenAtLeastOne = true;
                            }

                        }
                    }
                }
            }
        });
        if (!canMoveTokenAtLeastOne) {
            displayDice.innerHTML = rolledDiceValue;
            displayDice.style.backgroundColor = clickedPlayerColor;
            hasRolled = false;
            currentTurnIindex = (currentTurnIindex + 1) % 4;
            return;
        }

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
    let earnBonusTurn = false;

    if (hasRolled === false) return;
    if (!clickedToken.id.includes(players[currentTurnIindex])) {
        return;
    }
    const activePlayer = players[currentTurnIindex];
    const currentCellIds = clickedToken.parentElement.id;
    const homeCells = playerHomeMaping[activePlayer];

    if (homeCells.includes(currentCellIds)) {
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
    } else {
        const diceValue = +displayDice.innerHTML;

        const currentTrack = playerTracks[activePlayer];
        const currentIndex = currentTrack.indexOf(currentCellIds);
        const targetIndex = currentIndex + diceValue;
        if (targetIndex >= currentTrack.length) {
            return;
        }
        const targetCellId = currentTrack[targetIndex];
        const targetCellElement = document.getElementById(targetCellId);
        if (targetCellElement) {
            if (targetCellId === winningCellIds[activePlayer]) {
                earnBonusTurn = true;
            }
            let enemyToken = targetCellElement.querySelector('.token');
            if (enemyToken && !safeZones.includes(targetCellId) && !enemyToken.id.includes(activePlayer)) {
                let enemyColor = "";
                if (enemyToken.id.includes('red')) enemyColor = 'red';
                if (enemyToken.id.includes('blue')) enemyColor = 'blue';
                if (enemyToken.id.includes('yellow')) enemyColor = 'yellow';
                if (enemyToken.id.includes('green')) enemyColor = 'green';

                let enemyHomeCells = playerHomeMaping[enemyColor];
                let enemyCellId = enemyHomeCells.find(id => {
                    return document.getElementById(id).children.length === 0;
                });
                if (enemyCellId) {
                    document.getElementById(enemyCellId).appendChild(enemyToken);
                    earnBonusTurn = true;
                }
            }
            targetCellElement.appendChild(clickedToken);
            //win check
            const winningCellId = winningCellIds[activePlayer];
            const tokenToCheck = playerTokenIds[activePlayer];
            const hasWon = tokenToCheck.every(function (tokenId) {
                const tokenElement = document.getElementById(tokenId);
                return tokenElement && tokenElement.parentElement.id === winningCellId;
            });
            if (hasWon) {
                alert(`${activePlayer} WON the Game!`);
                return;
            }
        }
        if (diceValue !== 6 && !earnBonusTurn) {
            currentTurnIindex = (currentTurnIindex + 1) % 4;
        }
        hasRolled = false;
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