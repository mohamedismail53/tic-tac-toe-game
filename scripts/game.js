function resetGame() {
    playerTurn = 0;
    gameOver = false;
    console.log(winSection.firstElementChild.innerHTML);
    winSection.firstElementChild.innerHTML =
        `You won, <span id="active-player-name">PLAYER NAME</span>!`;
    winSection.style.display = 'none';

    let gameBoardIdx = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const curGameBoardElement = clickedGameFields.children[gameBoardIdx];
            curGameBoardElement.innerHTML = '';
            curGameBoardElement.classList.remove('disabled');
            gameBoardIdx++;
        }
    }
}

function runTheGame() {
    if (player1Name === '' || player2Name === '') {
        alert('Please set custom player names for both players!');
        return;
    }

    resetGame();

    playerTurnNameElement.innerHTML = player1Name;
    activeGame.style.display = 'block';
}


function checkWin() {
    for (let i = 0; i < 3; ++i) {
        if (gameData[i][0] == 1 && gameData[i][1] == 1 && gameData[i][2] == 1) {
            winSection.firstElementChild.firstElementChild.textContent = player1Name;
            winSection.style.display = 'block';
            gameOver = true;
        } else if (gameData[i][0] == 2 && gameData[i][1] == 2 && gameData[i][2] == 2) {
            winSection.firstElementChild.firstElementChild.textContent = player2Name;
            winSection.style.display = 'block';
            gameOver = true;
        } else if (gameData[0][i] == 1 && gameData[1][i] == 1 && gameData[2][i] == 1) {
            winSection.firstElementChild.firstElementChild.textContent = player1Name;
            winSection.style.display = 'block';
            gameOver = true;
        } else if (gameData[0][i] == 2 && gameData[1][i] == 2 && gameData[2][i] == 2) {
            winSection.firstElementChild.firstElementChild.textContent = player2Name;
            winSection.style.display = 'block';
            gameOver = true;
        }
    }
    if (gameData[0][0] == 1 && gameData[1][1] == 1 && gameData[2][2] == 1 ||
        gameData[0][2] == 1 && gameData[1][1] == 1 && gameData[2][0] == 1) {
        winSection.firstElementChild.firstElementChild.textContent = player1Name;
        winSection.style.display = 'block';
        gameOver = true;
    } else if (gameData[0][0] == 2 && gameData[1][1] == 2 && gameData[2][2] == 2 ||
        gameData[0][2] == 2 && gameData[1][1] == 2 && gameData[2][0] == 2) {
        winSection.firstElementChild.firstElementChild.textContent = player2Name;
        winSection.style.display = 'block';
        gameOver = true;
    }

    console.log(winSection.firstElementChild.firstElementChild.textContent);

    if (playerTurn === 9) {
        winSection.style.display = 'block';
        winSection.firstElementChild.innerHTML = `it's a draw`;
        gameOver = true;
    }
}

function selectGameField(event) {
    const targetElement = event.target;
    if (targetElement.tagName !== 'LI')
        return;

    if (targetElement.textContent === 'X' || targetElement.textContent === 'O') {
        alert('Please select an empty field');
        return;
    }

    if (gameOver) {
        console.log('hhhhh');
        return;
    }

    if (playerTurn % 2 === 0) {
        targetElement.textContent = 'X';
        playerTurnNameElement.innerHTML = player2Name;
    } else {
        targetElement.textContent = 'O';
        playerTurnNameElement.innerHTML = player1Name;
    }
    targetElement.classList.add('disabled');

    const selectRow = targetElement.dataset.row;
    const selectColumn = targetElement.dataset.col;

    gameData[selectRow - 1][selectColumn - 1] = (playerTurn % 2) + 1;

    playerTurn++;
    if (checkWin()) return;
}