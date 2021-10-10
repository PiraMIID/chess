import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board/Board';
import 'bootstrap/dist/css/bootstrap.min.css'

import Chat from "./chat/Chat";


ReactDOM.render(
    <React.StrictMode>

            <Board/>
            {/*<Chat/>*/}

    </React.StrictMode>,
    document.getElementById('root')
);
