import React, { Component } from 'react';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import Display from '../display/Display';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { calculation: 0 };
  }

  render() {
    const { calculation } = this.state;
    return (
      <div className="app">
        <Display result={calculation} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
