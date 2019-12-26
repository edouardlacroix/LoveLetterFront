import React, { Component } from 'react';
import Card, { cardSide } from 'components/Card'

import './style.scss';

class PlayedCardDisplay extends Component {
  constructor(props) {
    super(props);

  }

  cardList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]


  render() {
    return (
      <div className={'playedCardDisplay-wrapper'} >
        <h2>Cards Played</h2>
        <div className={'card-list'}>

          {this.cardList.map((item, id) => {
            return (
              <div style={{ zIndex: 10 + id + 1, top: 10 + id * 70 + 'px' }} className={'card-alone'}>
                <Card side={cardSide.front} />
              </div>
            )
          })
          }
        </div>

      </div >
    );
  }
}

export default PlayedCardDisplay;
