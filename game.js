var board;
var player1 = 1;
var player2 = 2;
var currentPlayer = player1;

function newGame() {
    board = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
        ];

    //create table
    var table = '<table>';

    //head
    table +='<thead>';
    for(let col = 0; col < board[0].length; col++)
    {
        table +='<td><button class ="dropBtn" col ="' + col + '">&darr;</button></td>';

    }

    table +='</thead>';

    //body
    table += '<tbody>';
    for(let row = 0; row < board.length; row++){
        table += '<tr>';
        for(let col = 0; col < board[row].length; col++)
        {
            table +='<td><span class="space"></span></td>';
        }
        table += '</tr>';

    }

    table += '</tbody>';
    table += '</table>';

    //output table
    $('#board').html(table);

    $('.dropBtn').on('click', drop);
}

function drop() {

    var col = $(this).attr('col');

    //check for open row
    for(let row = board.length - 1; row > 0; row--)
    {
        if(board[row][col] === 0)
        {
            board[row][col] = currentPlayer;

            //update the html
            $('#board table tbody tr:eq(' + row + ') td:eq(' + col + ').space').html(currentPlayer);

            break;
        }
    }
}
function changePlayer() {

    currentPlayer = currentPlayer === player1 ? player2 : player1
}
function check4win() {

}
function check4draw() {

}
function outputWinner() {

}
function endGame() {

}

$(document).ready(function () {

    newGame();

    $('#newGame').on('click', newGame);

    drop();

});
