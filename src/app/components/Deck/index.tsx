import React, { Component } from 'react';
import Card, { cardSide } from 'components/Card'

import './style.scss';


class Deck extends Component {
  constructor(props) {
    super(props);

  }




  render() {
    return (
      <div className={'deck-wrapper'} onClick={() => this.props.onClick()}  >
        <div className={'card-image'}>
          <Card side={cardSide.back} />
        </div>
      </div>
    );
  }
}

export default Deck;
