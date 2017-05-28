/**
 * Created by maciej on 28.05.17.
 */

var board = {
    fields: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'x',
};

function play(x, y) {

    if(x < 0) {
        throw new Error('X value cannot be negative!')
    }

    if(y < 0) {
        throw new Error('Y value cannot be negative!')
    }

    if(y < 1 || y > 3) {
        throw new Error('Y value is outside of the board!')
    }

    if(x < 1 || x > 3) {
        throw new Error('X value is outside of the board!')
    }

    if(board[(x-1) * 3 + (y-1)] !== '') {
        throw new Error('Selected field is occupied by enemy!')
    }

    board[(x-1) * 3 + (y-1)] = 'x';
}


module.exports = {
    play: play,
    board: board
}