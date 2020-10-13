import React from 'react';
import Card from 'app/components/Card';

import './style.scss';

const PlayedCardDisplay = (props) => {

  // TODO - Extract this in shared file
  const cardList = [
    { id: 0 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 8 },
    { id: 9 }
  ];

  return (
    <div className={'playedCardDisplay-wrapper'}>
      <h2>Cards Played</h2>
      <div className={'card-list'}>
        {cardList.map((item, id) => {
          return (
            <div
              style={{ zIndex: 10 + id + 1, top: 10 + id * 70 + 'px' }}
              className={'card-alone'}
            >
              <Card id={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default PlayedCardDisplay;
