import React from 'react';
import {Board, Tile} from '../minesweeper.js';
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
        
        if (flag) {
            li.classList.add("flag");
            li.innerHTML= "⚑";
            
            // ⚑
        } else {
            // const query = li.id;
            li.explore();

            // debugger;

            // const pos = li.id.split(",").map((el) => parseInt(el));
            // const tile = new Tile (this.state.board, pos);
            // tile.explore();
            // this.setState({ board: this.state.board });
            const neighbors = tile.neighbors();
            if (neighbors) {neighbors.map((el)=> {
                
                if (el.explored) {
                    
                    const elPos = el.pos;
                    // const lis = document.getElementById(li.id);
                    const lis = this.Board2[pos[0]]
                    lis.classList.add("explored");
                    
                };
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