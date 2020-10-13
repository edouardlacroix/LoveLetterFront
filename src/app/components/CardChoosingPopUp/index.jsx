import React, { useState, useEffect } from 'react';
import SocketConnection from 'shared/SocketConnection';
import Card from 'app/components/Card';

import './style.scss';

const CardChoosingPopUp = () => {

  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    SocketConnection.on('WAITING_ON_CARD_TARGET', () => {
      // Show popup
      setPopupOpen(true)
    })
  }, [])

  //  Seperating cards in two array to display evenly, change that to just css rules (hugh what was I thinking ?!)
  const cardListPartOne = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const cardListPartTwo = [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];

  return popupOpen ? (
    <div className={'cardChoosingPopUp-wrapper'}>
      <h1>Choose a card to target</h1>
      <div className={'card-row'}>
        {cardListPartOne.map(item => (
          <Card
            onClick={() => {
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: item.id });
              setPopupOpen(false)
            }}
            id={item.id}
          />
        ))}
      </div>
      <div className={'card-row'}>
        {cardListPartTwo.map(item => (
          <Card
            onClick={() => {
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: item.id });
              setPopupOpen(false)
            }}
            id={item.id}
          />
        ))}
      </div>
    </div>
  ) : null;
}


export default CardChoosingPopUp;
