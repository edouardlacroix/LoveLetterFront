import React, { useState } from 'react';
import SocketAction from 'services/SocketAction';
import history from 'shared/history';
import './style.scss';

const Lobby = () => {

  const [inputName, setInputName] = useState('');

  return (
    <div className={'lobby-wrapper'}>
      <h1 className={'title'}>Love Letter</h1>
      <p>Choose a player name</p>
      <input
        onChange={e => setInputName(e.target.value)}
        value={inputName}
      />
      <button
        onClick={() => {
          SocketAction.changeName(inputName);
          history.push('/board');
        }}
      >
        Join the Game
        </button>
    </div>
  );
}


export default Lobby;
