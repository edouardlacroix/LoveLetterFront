import React from 'react';
import { connect } from 'react-redux';
import SocketConnection from 'shared/SocketConnection';

import './style.scss';

const PlayerDisplay = (props) => {

  // TODO OnClick send info to server on player selection
  return (
    <div
      className={'playerDisplay-wrapper'}
      onClick={() => console.log('TODO selected player')}
    >
      {props.gameData.map(item => {
        if (item.id !== SocketConnection.id) {
          return (
            <p
              onClick={() => {
                SocketConnection.emit('CHOOSE_PLAYER_TARGET', item.id);
                props.onPlayerClick();
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

export default connect(state => ({
  gameData: state.AppReducer.gameData[0]
}))(PlayerDisplay);
