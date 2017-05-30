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
        } else if (value < 1 || value > 3) {
            throw new Error(axis + ' value is outside of the board!');
        }
    }

    play(x, y) {
        this.checkAxis(x, 'X');
        this.checkAxis(y, 'Y');
        this.selectField(x, y);
        for (let i = 0; i < 3; i++) {
            if (this.fields[i] === this.currentPlayer &&
                this.fields[3 + i] === this.currentPlayer &&
                this.fields[3 * 2 + i] === this.currentPlayer) {
                return this.currentPlayer + ' won the game!';
            } else if (this.fields[i * 3 + 0] === this.currentPlayer &&
                this.fields[i * 3 + 1] === this.currentPlayer &&
                this.fields[i * 3 + 2] === this.currentPlayer) {
                return this.currentPlayer + ' won the game!';
            }
        }
        if (this.fields[2] === this.currentPlayer &&
            this.fields[4] === this.currentPlayer &&
            this.fields[6] === this.currentPlayer) {
            return this.currentPlayer + ' won the game!';
        } else if (this.fields[0] === this.currentPlayer &&
            this.fields[4] === this.currentPlayer &&
            this.fields[8] === this.currentPlayer) {
            return this.currentPlayer + ' won the game!';
        }
        this.nextPlayer();
        return 'Keep playing!';
    }

    selectField(x, y) {
        if (this.fields[(x - 1) * 3 + (y - 1)] !== '') {
            throw new Error('Selected field is occupied by enemy!');
        } else
            this.fields[(x - 1) * 3 + (y - 1)] = this.currentPlayer;
    }

    nextPlayer() {
        if (this.currentPlayer === 'x')
            this.currentPlayer = 'o';
        else
            this.currentPlayer = 'x';
    }
}

module.exports = TicTacToe;
