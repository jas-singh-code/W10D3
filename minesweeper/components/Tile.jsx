import React from 'react';
export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const li = e.currentTarget

        const alt = e.altKey;
        const flag = false;
        if (alt) {flag = true};
        return this.props.updateGame(li, flag);
        
    }

    render() {
        return (
            <div className = "tile" onClick = {this.handleClick}>
                {this.props.board.map((col, idx)=> {
                    return(<li  key={idx} id={col}>
                        _
                    </li>)
                })}
            </div>
        )
    }
}