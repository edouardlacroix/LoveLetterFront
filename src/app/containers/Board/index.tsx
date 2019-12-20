import React, { Component } from 'react';
import PlayerList from 'components/PlayerList';
import store from 'base/store';
import './style.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'board-wrapper'}>
        <h1>Game Board </h1>
        <PlayerList />
      </div>
    );
  }
}

export default Board;
