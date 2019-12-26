import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Lobby from 'containers/Lobby';
import Board from 'containers/Board';
import history from 'shared/history';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div className={'app-div'}>
          <Route path="/" exact component={Lobby} />
          <Route path="/board" exact component={Board} />
        </div>
      </Router>
    );
  }
}

export default App;
