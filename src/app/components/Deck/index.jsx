import React from 'react';
import Card from 'app/components/Card';

import './style.scss';


const Deck = (props) => {
  return (
    <div className={'deck-wrapper'} onClick={() => props.onClick()}>
      <div className={'card-image'}>
        <Card />
        <p>{props.cardsLeft}</p>
      </div>
    </div>
  );
}


export default Deck;
