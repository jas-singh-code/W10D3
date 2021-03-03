import Game from '../components/Game';
import React from 'react';
import ReactDOM from 'react-dom';
import Tile from '../components/Tile';


document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById('main');
    ReactDOM.render(<Game/>, main)
})