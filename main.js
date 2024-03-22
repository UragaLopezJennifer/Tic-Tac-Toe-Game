/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
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
    board.forEach(function(mark, index){
    console.log(mark, index);
    });
};

 //be sure to call the init function!
 init();
    