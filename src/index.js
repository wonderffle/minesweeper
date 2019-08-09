import React from 'react';
import ReactDOM from 'react-dom';
import Minesweeper from './minesweeper';
import registerServiceWorker from './registerServiceWorker';
import './minesweeper.css';

ReactDOM.render(<Minesweeper />, document.getElementById('root'));
registerServiceWorker();
