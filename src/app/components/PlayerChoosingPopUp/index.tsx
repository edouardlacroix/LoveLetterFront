import React, { Component } from 'react';
import PlayerDisplay from './components/PlayerDisplay';
import SocketConnection from 'shared/SocketConnection';

import './style.scss';

class PlayerChoosingPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: false
    };
  }
  componentDidMount() {
    SocketConnection.on('WAITING_ON_PLAYER_TARGET', () =>
      this.setState({ displayed: true })
    );
  }

  render() {
    return this.state.displayed ? (
      <div className={'playerChoosingPopUp-wrapper'}>
        <h1>Choose your target</h1>
        <PlayerDisplay
          onPlayerClick={() => this.setState({ displayed: false })}
        />
      </div>
    ) : null;
  }
}

export default PlayerChoosingPopUp;
