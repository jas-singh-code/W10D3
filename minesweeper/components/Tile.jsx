import React from 'react';
export default class Tile extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.board.map((col, idx)=> {
                    return(<li key={idx} id={col}>
                    column
                    </li>)
                })}
            </div>
        )
    }
}