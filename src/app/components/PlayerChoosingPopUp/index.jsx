import React, { useState, useEffect } from 'react';
import PlayerDisplay from './components/PlayerDisplay';
import SocketConnection from 'shared/SocketConnection';

import './style.scss';

const PlayerChoosingPopUp = () => {

  useEffect(() => {
    SocketConnection.on('WAITING_ON_PLAYER_TARGET', () =>
      setPopupOpen(true)
    );
  }, [])

  const [popupOpen, setPopupOpen] = useState(false);


  return popupOpen ? (
    <div className={'playerChoosingPopUp-wrapper'}>
      <h1>Choose your target</h1>
      <PlayerDisplay
        onPlayerClick={() => setPopupOpen(false)}
      />
    </div>
  ) : null;

}

export default PlayerChoosingPopUp;
