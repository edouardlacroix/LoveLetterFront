import React, { Component } from 'react';
import Card from 'components/Card';

import './style.scss';

interface IProps {
  cardsLeft: Number;
  onClick: Function;
}

class Deck extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'deck-wrapper'} onClick={() => this.props.onClick()}>
        <div className={'card-image'}>
          <Card />
          <p>{this.props.cardsLeft}</p>
        </div>
      </div>
    );
  }
}

export default Deck;
