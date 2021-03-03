import React from 'react';
import {Board} from '../minesweeper.js';

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
                <h1>Hello</h1>
            </div>
        )
    }

}