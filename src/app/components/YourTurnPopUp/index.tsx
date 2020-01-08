import React, { Component } from 'react';
import SocketConnection from 'shared/SocketConnection';
import yourTurnImg from 'app/assets/yourTurnImg.png';

import './style.scss';

class YourTurnPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: false
    };
  }
  componentDidMount() {
    SocketConnection.on('YOUR_TURN', () =>
      this.setState({ displayed: true }, () =>
        setTimeout(() => this.setState({ displayed: false }), 2000)
      )
    );
  }

  render() {
    return this.state.displayed ? (
      <div className={'yourTurn-wrapper'}>
        {/* <h1>Your Turn</h1> */}
        <img src={yourTurnImg} />
      </div>
    ) : null;
  }
}

export default YourTurnPopUp;
