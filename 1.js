const playerText = document.getElementById("playerText");
const restartBtn = document.getElementById('restartBtn');
const boxes = Array.from(document.getElementsByClassName('box'));
const winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');
const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer = X_TEXT;
const spaces = Array(9).fill(null);
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5
