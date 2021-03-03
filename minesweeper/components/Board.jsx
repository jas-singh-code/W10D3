import React from 'react';
import Tile from "./Tile.jsx";

export default class Board extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
    }
    render (){
        return(
            <div >
                {this.props.board.grid.map((row, idx)=> {

                    return(<ul className = "board" key ={idx} id={row} >
                        <Tile board = {this.props.board.grid} updateGame = {this.props.updateGame}/>
                    </ul>)
                })}
            </div>
        )
    }
}