import React, { Component } from 'react';
import SocketConnection from 'shared/SocketConnection';
import './style.scss';

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersData: []
    };
  }

  playersDataListener() {
    SocketConnection.on('SEND_ALL_PLAYERS_DATA', value => {
      this.setState({ playersData: value });
      console.log(this.state.playersData);
    });
  }

  componentDidMount() {
    this.playersDataListener();
  }

  render() {
    return (
      <div className={'playerList-wrapper'}>
        <p>Player List</p>
        {this.state.playersData.map(item => (
          <div>
            <h3>{item.name}</h3>
            <p>Points : {item.points}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PlayerList;
