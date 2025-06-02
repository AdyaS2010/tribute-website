const board = document.querySelector('.board');
const pieces = [
    "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
    "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
    "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
]

const board = document.querySelector('.board');
if (!board) {
    console.error("Board not found! Check HTML.");
}

/*
function createBoard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if (Math.floor(i / 8) % 2 === 0) {
            square.classList.add(i % 2 === 0 ? 'white' : 'black');
        } else {
            square.classList.add(i % 2 === 0 ? 'black' : 'white');
        }
        square.textContent = pieces[i];
        board.appendChild(square);
    }
}
*/

pieces.forEach((piece, index) => {
    let square = document.createElement('div');
    square.textContent = piece;
    square.style.display = 'flex';
    square.style.justifyContent = 'center';
    square.style.alignItems = 'center';
    square.classList.add('square');
    square.style.fontSize = '24px';
    board.appendChild(square);
});
