import React from 'react';
import {Board} from '../minesweeper.js';
import Board2 from './Board.jsx';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board : new Board(9, 2)

        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(li, flag) {
        alert("the connection has been made!");
        if (flag) {
            li.addClass("flag");
            li.innerHTML("⚑")
            // ⚑
        }
    }

    render() {
        return (
            <div>
                <Board2 board={this.state.board} updateGame = {this.updateGame}/>
                <h1>Hello</h1>
            </div>
        )
    }

}