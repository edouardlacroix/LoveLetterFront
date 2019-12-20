import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Lobby from 'containers/Lobby';
import Board from 'containers/Board';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className={'app-div'}>
          <Route path="/" exact component={Lobby} />
          <Route path="/board" exact component={Board} />
        </div>
      </Router>
    );
  }
}

export default App;
