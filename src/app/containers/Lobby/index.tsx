import React, { Component } from 'react';
import store from 'base/store';
import './style.scss';

class Lobby extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'lobby-wrapper'}>
        <h1 className={'title'}>Love Letter</h1>
        <p>Choose a player name</p>
        <input></input>
      </div>
    );
  }
}

export default Lobby;
