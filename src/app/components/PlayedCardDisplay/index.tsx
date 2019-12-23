import React, { Component } from 'react';
import Card from 'components/Card'
import './style.scss';

class PlayedCardDisplay extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={'playedCardDisplay-wrapper'} >
        <Card />
      </div>
    );
  }
}

export default PlayedCardDisplay;
