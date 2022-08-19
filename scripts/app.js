const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let EditedPressedButton = 0;
let player1Name = '';
let player2Name = '';
let playerTurn = 0;
let gameOver = false;

const backdrop = document.getElementById('backdrop');
const playerConfigOverlay = document.querySelector('aside');
const formElement = document.querySelector('form');
const errorElement = document.getElementById('error-handling');
const inputElement = document.querySelector('input');
const labelElement = document.querySelector('label');
const player1NameElement = document.getElementById('player-1-name');
const player2NameElement = document.getElementById('player-2-name');
const activeGame = document.getElementById('active-game');
const playerTurnNameElement = document.getElementById('player-turn-name');
const clickedGameFields = document.getElementById('game-board');
const winSection = document.querySelector('#active-game article');



const overlayCancelButton = document.getElementById('cancel-btn');
const overlayConfirmButton = document.getElementById('confirm-btn');
const player1EditButton = document.getElementById('player1-edit-btn');
const player2EditButton = document.getElementById('player2-edit-btn');
const startGameButton = document.getElementById('start-game-btn');



player1EditButton.addEventListener('click', openOverlayConfiguration);
player2EditButton.addEventListener('click', openOverlayConfiguration);
overlayCancelButton.addEventListener('click', cancelPlayerOverlay);

backdrop.addEventListener('click', cancelPlayerOverlay);
formElement.addEventListener('submit', savePlayerConfig);

startGameButton.addEventListener('click', runTheGame);


clickedGameFields.addEventListener('click', selectGameField);