import React, { Component } from 'react';
import Card from 'components/Card';

import './style.scss';

class PlayedCardDisplay extends Component {
  constructor(props) {
    super(props);
  }

  cardList = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 }
  ];

  render() {
    return (
      <div className={'playedCardDisplay-wrapper'}>
        <h2>Cards Played</h2>
        <div className={'card-list'}>
          {this.cardList.map((item, id) => {
            return (
              <div
                style={{ zIndex: 10 + id + 1, top: 10 + id * 70 + 'px' }}
                className={'card-alone'}
              >
                <Card />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PlayedCardDisplay;
