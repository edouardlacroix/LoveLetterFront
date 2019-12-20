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

  componentDidMount() {
    SocketConnection.on('SEND_ALL_PLAYERS_DATA', value => {
      this.setState({ playersData: value });
      console.log(this.state.playersData);
    });
  }

  render() {
    return (
      <div className={'playerList-wrapper'}>
        <p>Player List</p>
        {this.state.playersData.map(item => (
          <p>{JSON.stringify(item)}</p>
        ))}
      </div>
    );
  }
}

export default PlayerList;
