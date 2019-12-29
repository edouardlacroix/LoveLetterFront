import React, { Component } from 'react';
import { connect } from 'react-redux';
import SocketConnection from 'shared/SocketConnection';

import './style.scss';

class PlayerList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // SocketConnection.emit('UPDATE_GAME_DATA_REFRESH');
  }

  localPlayer = this.props.gameData.filter(item => item.id === SocketConnection.id)[0]
  otherPlayers = this.props.gameData.filter(item => item.id != SocketConnection.id)
  render() {
    console.log(this.localPlayer)
    return (
      <div className={'playerList-wrapper'}>
        <h2>Player List</h2>
        <div className={'localPlayer'}>
          <h3><a>★</a>{this.localPlayer.name}</h3>
          <p>Points : {this.localPlayer.points}</p>
        </div>
        {this.otherPlayers.map(item => (
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
  gameData: state.AppReducer.gameData
}))(PlayerList);
