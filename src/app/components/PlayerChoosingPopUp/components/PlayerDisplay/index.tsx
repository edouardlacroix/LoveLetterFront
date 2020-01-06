import React, { Component } from 'react';
import { connect } from 'react-redux';
import SocketConnection from 'shared/SocketConnection';

import './style.scss';

class PlayerDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO OnClick send info to server on player selection
    return (
      <div
        className={'playerDisplay-wrapper'}
        onClick={() => console.log('TODO selected player')}
      >
        {this.props.gameData.map(item => {
          if (item.id !== SocketConnection.id) {
            return (
              <p
                onClick={() => {
                  SocketConnection.emit('CHOOSE_PLAYER_TARGET', item.id);
                  this.props.onPlayerClick();
                }}
              >
                {item.name}
              </p>
            );
          }
        })}
      </div>
    );
  }
}

export default connect(state => ({
  gameData: state.AppReducer.gameData
}))(PlayerDisplay);
