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

  render() {
    return (
      <div className={'playerList-wrapper'}>
        <h2>Player List</h2>
        {this.props.gameData.map(item => (
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
