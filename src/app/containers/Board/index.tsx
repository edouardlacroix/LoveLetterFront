import React, { Component } from 'react';
import PlayerList from 'components/PlayerList';
import Card, { cardSide } from 'components/Card';
import PlayedCardDisplay from 'components/PlayedCardDisplay';
import Deck from 'components/Deck';
import PlayerChoosingPopUp from 'components/PlayerChoosingPopUp';
import store from 'base/store';
import './style.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'board-wrapper'}>
        {/* <h1>Game Board </h1> */}
        <Deck />
        <PlayerList />
        <PlayerChoosingPopUp />
        <div className={'card-display'}>
          <Card side={cardSide.front} />
          <Card side={cardSide.front} />
          <Card side={cardSide.front} />
        </div>
        <PlayedCardDisplay />
      </div>
    );
  }
}

export default Board;
