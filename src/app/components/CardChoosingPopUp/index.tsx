import React, { Component } from 'react';
import SocketConnection from 'shared/SocketConnection';
import Card from 'components/Card';

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

  cardListPartOne = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  cardListPartSecond = [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];

  render() {
    return this.state.displayed ? (
      <div className={'cardChoosingPopUp-wrapper'}>
        <h1>Choose a card to target</h1>
        <div className={'card-row'}>
          {this.cardListPartOne.map(item => (
            <Card
              onClick={() => {
                SocketConnection.emit('CHOOSE_CARD_TARGET', { id: item.id });
                this.setState({ displayed: false });
              }}
              id={item.id}
            />
          ))}
        </div>
        <div className={'card-row'}>
          {this.cardListPartSecond.map(item => (
            <Card
              onClick={() => {
                SocketConnection.emit('CHOOSE_CARD_TARGET', { id: item.id });
                this.setState({ displayed: false });
              }}
              id={item.id}
            />
          ))}
        </div>
      </div>
    ) : null;
  }
}

export default CardChoosingPopUp;
