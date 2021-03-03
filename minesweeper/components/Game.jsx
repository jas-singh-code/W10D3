import React from 'react';
import {Board} from '../minesweeper.js';
import Board2 from './Board.jsx';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board : new Board(6, 2)

        }
    }

    updateGame() {
        
    }

    render() {
        return (
            <div>
                <Board2 board={this.state.board}/>
                <h1>Hello</h1>
            </div>
        )
    }

}