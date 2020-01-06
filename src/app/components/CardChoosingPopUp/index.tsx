import React, { Component } from 'react';
import SocketConnection from 'shared/SocketConnection';
import Card, { cardSide } from 'components/Card';

import './style.scss';

class CardChoosingPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: false
    };
  }
  componentDidMount() {
    SocketConnection.on('WAITING_ON_CARD_TARGET', () =>
      this.setState({ displayed: true })
    );
  }

  render() {
    return this.state.displayed ? (
      <div className={'cardChoosingPopUp-wrapper'}>
        <h1>Choose a card to target</h1>
        <div className={'card-row'}>
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 0 })
            }
          />
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 1 })
            }
          />
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 2 })
            }
          />
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 3 })
            }
          />
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 4 })
            }
          />
        </div>
        <div className={'card-row'}>
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 5 })
            }
          />
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 6 })
            }
          />
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 7 })
            }
          />
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 8 })
            }
          />
          <Card
            onClick={() =>
              SocketConnection.emit('CHOOSE_CARD_TARGET', { id: 9 })
            }
          />
        </div>
      </div>
    ) : null;
  }
}

export default CardChoosingPopUp;
