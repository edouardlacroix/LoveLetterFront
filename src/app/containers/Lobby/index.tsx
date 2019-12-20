import React, { Component } from 'react';
import store from 'base/store';
import SocketAction from 'services/SocketAction';
import history from 'shared/history';
import './style.scss';

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: ''
    };
  }

  render() {
    return (
      <div className={'lobby-wrapper'}>
        <h1 className={'title'}>Love Letter</h1>
        <p>Choose a player name</p>
        <input
          onChange={e => this.setState({ inputName: e.target.value })}
          value={this.state.inputName}
        />
        <button
          onClick={() => {
            SocketAction.changeName(this.state.inputName);
            history.push('/board');
          }}
        >
          Join the Game
        </button>
      </div>
    );
  }
}

export default Lobby;
