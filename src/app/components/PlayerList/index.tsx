import React, { Component } from 'react';
import { connect } from 'react-redux';
import SocketConnection from 'shared/SocketConnection';

import './style.scss';

class PlayerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const localPlayer = this.props.gameData.filter(
      item => item.id === SocketConnection.id
    )[0];

    const otherPlayers = this.props.gameData.filter(
      item => item.id != SocketConnection.id
    );

    console.log(localPlayer);
    return (
      <div className={'playerList-wrapper'}>
        <h2>Player List</h2>
        <div className={'localPlayer'}>
          <h3>
            <a>★</a>
            {localPlayer.name}
          </h3>
          <p>Points : {localPlayer.points}</p>
        </div>
        {otherPlayers.map(item => (
          <div>
            <h3>{item.name}</h3>
            <p>Points : {item.points}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(state => ({
  gameData: state.AppReducer.gameData[0]
}))(PlayerList);
