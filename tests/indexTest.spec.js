/* eslint-disable max-len */
/**
 * Created by maciej && mateusz on 28.05.17.
 */
'use strict';

let expect = require('chai').expect;
let TicTacToe = require('../lib/ticTacToe');

describe('Game conditions', () => {
    let instance;

    beforeEach(() => {
        instance = new TicTacToe();
    });

    it('When there is no winner should return "Keep playing!"', () => {
        expect(instance.play(1, 1)).to.eql('Keep playing!');
    });

    it('When x player won the game should return "x won the game!(horizontal)', () => {
        instance.play(1, 1); instance.play(1, 2);
        instance.play(2, 1); instance.play(1, 3);
        expect(instance.play(3, 1)).to.eql('x won the game!');
    });

    it('When o player won the game should return "o won the game!(horizontal)', () => {
        instance.play(1, 3); instance.play(1, 1);
        instance.play(1, 2); instance.play(2, 1); instance.play(3, 3);
        expect(instance.play(3, 1)).to.eql('o won the game!');
    });

    it('When x player won the game should return "x won the game!(vertical)', () => {
        instance.play(1, 1); instance.play(2, 1);
        instance.play(1, 2); instance.play(3, 1);
        expect(instance.play(1, 3)).to.eql('x won the game!');
    });

    it('When o player won the game should return "o won the game!(vertical)', () => {
        instance.play(3, 1); instance.play(1, 1);
        instance.play(2, 1); instance.play(1, 2); instance.play(3, 3);
        expect(instance.play(1, 3)).to.eql('o won the game!');
    });

    it('When o player won the game should return "o won the game!(cross)', () => {
        instance.play(1, 2); instance.play(1, 1);
        instance.play(2, 1); instance.play(2, 2); instance.play(3, 2);
        expect(instance.play(3, 3)).to.eql('o won the game!');
    });

    it('When x player won the game should return "x won the game!(cross)', () => {
        instance.play(1, 3); instance.play(1, 2);
        instance.play(2, 2); instance.play(2, 1);
        expect(instance.play(3, 1)).to.eql('x won the game!');
    });
});

describe('Select field tests', () => {
    let instance;

    beforeEach(() => {
        instance = new TicTacToe();
    });

    it('When y is outside of the box should throw an exception', () => {
        expect(() => {
            instance.play(2, 5);
        }).to.throw('Y value is outside of the board!');
    });

    it('When x is outside of the box should throw an exception', () => {
        expect(() => {
            instance.play(10, 1);
        }).to.throw('X value is outside of the board!');
    });

    it('When x has negative value should throw an exception', () => {
        expect(() => {
            instance.play(-1, 10);
        }).to.throw('X value cannot be negative!');
    });

    it('When y has negative value should throw an exception', () => {
        expect(() => {
            instance.play(2, -10);
        }).to.throw('Y value cannot be negative!');
    });

    it('When field is occupied should throw an exception', () => {
        instance.play(1, 1);
        expect(() => {
            instance.play(1, 1);
        }).to.throw('Selected field is occupied by enemy!');
    });

    it('Player \'x\' starts', () => {
        expect(instance.currentPlayer).to.eql('x');
    });

    it('Player \'o\' should have his turn after 1st move', () => {
        instance.play(1, 2);
        expect(instance.currentPlayer).to.eql('o');
    });

    it('Player \'x\' should have his turn after 2nd move', () => {
        instance.play(1, 2);
        instance.play(3, 1);
        expect(instance.currentPlayer).to.eql('x');
    });
});
