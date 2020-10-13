import React, { Component } from 'react';
import PlayerList from 'app/components/PlayerList';
import Card from 'app/components/Card';
import PlayedCardDisplay from 'app/components/PlayedCardDisplay';
import Deck from 'app/components/Deck';
import PlayerChoosingPopUp from 'app/components/PlayerChoosingPopUp';
import CardChoosingPopUp from 'app/components/CardChoosingPopUp';
import YourTurnPopUp from 'app/components/YourTurnPopUp';
import SocketConnection from 'shared/SocketConnection';
import history from 'history';
import { connect } from 'react-redux';
import './style.scss';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.gameData);
  }
  render() {
    if (this.props.gameData) {
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
    } else {
      return null;
    }
  }
}

export default connect(state => ({
  gameData: state.AppReducer.gameData ? state.AppReducer.gameData[0] : null,
  deck: state.AppReducer.gameData ? state.AppReducer.gameData[1] : null,
  localPlayerData: state.AppReducer.localPlayerData
}))(Board);
