import React, { Component } from 'react';
import Card from 'components/Card';

import './style.scss';

class Deck extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'deck-wrapper'} onClick={() => this.props.onClick()}>
        <div className={'card-image'}>
          <Card />
          <p>27</p>
        </div>
      </div>
    );
  }
}

export default Deck;
