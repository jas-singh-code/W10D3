import React from 'react';
export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const [row, col] = e.target.id.split(",").map((el)=> parseInt(el));
        const li = this.props.board[row][col];
        const alt = e.altKey;
        let flag = false;
        if (alt) {flag = true};

        return this.props.updateGame(li, flag);
    }

    render() {
    
        return (
            <div className = "tile" onClick = {this.handleClick}>
                {this.props.board.map((col, idx)=> {
                    return(<li key={idx} id={[this.props.rowIdx, idx]}>
                        _
                    </li>)
                })}
            </div>
        )
    }
}