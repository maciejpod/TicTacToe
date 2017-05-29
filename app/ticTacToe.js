/**
 * Created by maciej && mateusz on 28.05.17.
 */

class TicTacToe {
    constructor() {
        this.fields = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 'x';
    }


    checkAxis(value, axis) {
        if (value < 0) {
            throw new Error(axis + ' value cannot be negative!');
        }

        if (value < 1 || value > 3) {
            throw new Error(axis + ' value is outside of the board!')
        }
    };

    play(x, y) {
        this.checkAxis(x, 'X');
        this.checkAxis(y, 'Y');
        this.selectField(x, y);
        this.nextPlayer();
    }

    selectField(x , y) {
        if (this.fields[(x - 1) * 3 + (y - 1)] !== '') {
            throw new Error('Selected field is occupied by enemy!')
        }
        this.fields[(x - 1) * 3 + (y - 1)] = this.fields.currentPlayer;
    }

    nextPlayer() {
        if (this.currentPlayer === 'x')
            this.currentPlayer = 'o';
        else
            this.currentPlayer = 'x';
    }
}

module.exports = TicTacToe;
