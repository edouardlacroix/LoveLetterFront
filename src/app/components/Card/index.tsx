import React, { Component } from 'react';
import spy from 'app/assets/spy.jpg';
import guard from 'app/assets/guard.jpg';
import priest from 'app/assets/priest.png';
import baron from 'app/assets/baron.jpg';
import handmaid from 'app/assets/handmaid.jpg';
import prince from 'app/assets/prince.jpg';
import chancelor from 'app/assets/chancelor.jpg';
import king from 'app/assets/king.jpg';
import countess from 'app/assets/countess.jpg';
import princess from 'app/assets/princess.jpg';

import cardBack from 'app/assets/card_back.jpg';
import './style.scss';

interface IProps {
  id: number;
}

class Card extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  frontImageSwitch() {
    switch (this.props.id) {
      case 0:
        return <img src={spy} />;
      case 1:
        return <img src={guard} />;
      case 2:
        return <img src={priest} />;
      case 3:
        return <img src={baron} />;
      case 4:
        return <img src={handmaid} />;
      case 5:
        return <img src={prince} />;
      case 6:
        return <img src={chancelor} />;
      case 7:
        return <img src={king} />;
      case 8:
        return <img src={countess} />;
      case 9:
        return <img src={princess} />;
      default:
        return <img src={cardBack} />;
      // return (
      //   <img
      //     src={
      //       'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg'
      //     }
      //   />
      // );
    }
  }

  render() {
    return (
      <div className={'card-wrapper'} onClick={() => this.props.onClick()}>
        {this.frontImageSwitch()}
      </div>
    );
  }
}

export default Card;
