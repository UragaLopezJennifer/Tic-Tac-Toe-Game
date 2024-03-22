/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X';
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
// new code below
const messages = document.querySelector('h2');
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
/*----- functions -----*/
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    // In an if statement it would look like: 
    // if (turn === 'X') {
    // turn = 'O' 
    // } else {
    // turn = 'X' 
    // };
    // writing the ternary saved you from all that. 
    render();

 };
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];

    // new code here
    render();
};

function render() {
    board.forEach(function(val, idx) {
    squares[idx].textContent = val;
    });
    // new code below
    messages.textContent = `It's ${turn}'s turn!`;
 };

 //be sure to call the init function!
 init();
    