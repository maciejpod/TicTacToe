/**
 * Created by maciej && mateusz on 28.05.17.
 */

class TicTacToe {
    constructor() {
        this.fields = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'x';
    }

    play(x, y) {

        if (x < 0) {
            throw new Error('X value cannot be negative!')
        }

        if (y < 0) {
            throw new Error('Y value cannot be negative!')
        }

        if (y < 1 || y > 3) {
            throw new Error('Y value is outside of the board!')
        }

        if (x < 1 || x > 3) {
            throw new Error('X value is outside of the board!')
        }

        if (this.fields[(x - 1) * 3 + (y - 1)] !== '') {
            throw new Error('Selected field is occupied by enemy!')
        }

        this.fields[(x - 1) * 3 + (y - 1)] = this.fields.currentPlayer;

        this.nextPlayer();
    }

    nextPlayer() {
        if (this.currentPlayer === 'x')
            this.currentPlayer = 'o';
        else
            this.currentPlayer = 'x';
    }
}

module.exports = TicTacToe;
