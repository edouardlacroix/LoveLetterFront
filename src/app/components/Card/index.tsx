import React, { Component } from 'react';
import priestTEMP from 'app/assets/priestTEMP.png'
import './style.scss';

class Card extends Component {
  constructor(props) {
    super(props);

  }




  render() {
    return (
      <div className={'card-wrapper'} onClick={() => this.props.onClick()}  >
        <img src={priestTEMP} />
      </div>
    );
  }
}

export default Card;
