import React, { useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import Lobby from 'containers/Lobby';
import Board from 'app/containers/Board';
import history from 'shared/history';
import SocketConnection from 'shared/SocketConnection';
import store from '../../../base/store';
import { setNewGameData, setLocalPlayerData } from './redux/actions';

import './style.scss';

const App = () => {

  useEffect(() => {
    window.addEventListener('beforeunload', ev => {
      SocketConnection.emit('DISCONNECT_SELF');
    });
    SocketConnection.on('UPDATE_GAME_DATA', data => {
      store.dispatch(setNewGameData(data));
    });
    SocketConnection.on('SEND_PLAYER_CARD', data => {
      store.dispatch(setLocalPlayerData(data));
    });
  })


  return (
    <Router history={history}>
      <div className={'app-div'}>
        <Route path="/" exact component={Lobby} />
        <Route path="/board" exact component={Board} />
      </div>
    </Router>
  );
}


export default App;
