/**
 * Created by maciej && mateusz on 28.05.17.
 */
'use strict';

var expect = require('chai').expect;
var TicTacToe = require('../app/ticTacToe');

describe('Select field tests', () => {

    var instance;

    beforeEach(() => {
        instance = new TicTacToe();
    });

    it('When y is outside of the box should throw an exception', () => {
        expect(() => {instance.play(2, 5)}).to.throw('Y value is outside of the board!');
    });

    it('When x is outside of the box should throw an exception', () => {
        expect(() => {instance.play(10, 1)}).to.throw('X value is outside of the board!');
    });

    it('When x has negative value should throw an exception', () => {
        expect(() => {instance.play(-1, 10)}).to.throw('X value cannot be negative!');
    });

    it('When y has negative value should throw an exception', () => {
        expect(() => {instance.play(2, -10)}).to.throw('Y value cannot be negative!');
    });

    it('When field is occupied should throw an exception', () => {
        instance.play(1, 1);
        expect(() => {instance.play(1, 1)}).to.throw('Selected field is occupied by enemy!');
    });
});