import React, { Component } from 'react';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import Display from '../display/Display';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
