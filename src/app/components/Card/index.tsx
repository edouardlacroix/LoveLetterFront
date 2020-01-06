import React, { Component } from 'react';
import priestTEMP from 'app/assets/priestTEMP.png';
import spyTEMP from 'app/assets/spyTEMP.png';
import guardTEMP from 'app/assets/guardTEMP.jpg';

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
        return <img src={spyTEMP} />;
      case 1:
        return <img src={guardTEMP} />;
      case 2:
        return <img src={priestTEMP} />;
      case 3:
        return <img src={priestTEMP} />;
      case 4:
        return <img src={priestTEMP} />;
      case 5:
        return <img src={priestTEMP} />;
      case 6:
        return <img src={priestTEMP} />;
      case 7:
        return <img src={priestTEMP} />;
      case 8:
        return <img src={priestTEMP} />;
      case 9:
        return <img src={priestTEMP} />;
      default:
        return <img src={cardBack} />;
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
