import React, { Component } from 'react';
import priestTEMP from 'app/assets/priestTEMP.png'
import cardBack from 'app/assets/card_Back.jpg'
import './style.scss';


export enum cardSide { front, back }

interface IProps {
  side: cardSide
}


class Card extends Component {
  constructor(props) {
    super(props);

  }




  render() {
    return (
      <div className={'card-wrapper'} onClick={() => this.props.onClick()}  >
        {this.props.side === cardSide.front ?
          <img src={priestTEMP} /> :
          <img src={cardBack} />

        }
      </div>
    );
  }
}

export default Card;
