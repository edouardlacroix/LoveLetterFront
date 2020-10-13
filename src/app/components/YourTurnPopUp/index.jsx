import React, { useState, useEffect } from 'react';
import SocketConnection from 'shared/SocketConnection';
import yourTurnImg from 'app/assets/yourTurnImg.png';

import './style.scss';

const YourTurnPopUp = () => {

  // Declaring new state variable
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    SocketConnection.on('YOUR_TURN', () => {
      // Show popup
      setPopupOpen(true)
      // After 2 second hide popup
      const timer = setTimeout(
        () => setPopupOpen(false), 2000
      )
      return () => clearTimeout(timer)
    })
  }, [])


  return popupOpen ? (
    <div className={'yourTurn-wrapper'}>
      <img src={yourTurnImg} />
    </div>
  ) : null;
}


export default YourTurnPopUp;
