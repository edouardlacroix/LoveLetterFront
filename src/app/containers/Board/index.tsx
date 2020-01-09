import React, { Component } from 'react';
import PlayerList from 'components/PlayerList';
import Card from 'components/Card';
import PlayedCardDisplay from 'components/PlayedCardDisplay';
import Deck from 'components/Deck';
import PlayerChoosingPopUp from 'components/PlayerChoosingPopUp';
import CardChoosingPopUp from 'components/CardChoosingPopUp';
import YourTurnPopUp from 'components/YourTurnPopUp';
import SocketConnection from 'shared/SocketConnection';
import history from 'history';
import { connect } from 'react-redux';
import './style.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'board-wrapper'}>
        <Deck onClick={() => null} cardsLeft={this.props.deck.cardsLeft} />
        <PlayerList />
        <PlayerChoosingPopUp />
        <CardChoosingPopUp />
        <YourTurnPopUp />
        <div className={'card-display'}>
          {this.props.localPlayerData
            ? this.props.localPlayerData.map(item => <Card id={item.id} />)
            : null}

          <Card
            id={1}
            onClick={() => SocketConnection.emit('PLAY_CARD', { id: 1 })}
          />
          <Card
            id={7}
            onClick={() => SocketConnection.emit('PLAY_CARD', { id: 7 })}
          />
        </div>
        <PlayedCardDisplay />
      </div>
    );
  }
}

export default connect(state => ({
  gameData: state.AppReducer.gameData[0],
  deck: state.AppReducer.gameData[1],
  localPlayerData: state.AppReducer.localPlayerData
}))(Board);
