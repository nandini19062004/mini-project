const playerText = document.getElementById("playerText");
const restartBtn = document.getElementById('restartBtn');
const boxes = Array.from(document.getElementsByClassName('box'));
const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer = X_TEXT;
const spaces = Array(9).fill(null);
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handlePlayerChange() {
    playerText.innerText = `${currentPlayer}'s turn`;
}

function handleRestart() {
    currentPlayer = X_TEXT;
    spaces.fill(null); // Use fill() instead of forEach loop
    boxes.forEach(box => box.innerText = ''); // Clear boxes text
    handlePlayerChange();
}

function checkWin() {
    return winningCombos.some(combination => {
        return combination.every(index => {
            return boxes[index].innerText === currentPlayer;
        });
    });
}

function checkDraw() {
    return spaces.every(space => space !== null);
}

function handleBoxClick(index) {
    if (spaces[index] !== null || checkWin() || checkDraw()) {
        return;
    }
    spaces[index] = currentPlayer;
    boxes[index].innerText = currentPlayer;
    if (checkWin()) {
        playerText.innerText = `${currentPlayer} wins!`;
        return;
    }
    if (checkDraw()) {
        playerText.innerText = "It's a draw!";
        return;
    }
    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
    handlePlayerChange();
}

function addEventListeners() {
    boxes.forEach((box, index) => {
        box.addEventListener('click', () => handleBoxClick(index));
    });
    restartBtn.addEventListener('click', handleRestart);
}

addEventListeners();
handlePlayerChange();
