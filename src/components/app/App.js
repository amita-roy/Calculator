import React, { Component } from 'react';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import Display from '../display/Display';
// import calculate from '../../logic/calculate';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { calculation: 0 };
  }

  handleInput = data => {
    console.log(data);
  }

  render() {
    const { calculation } = this.state;
    return (
      <div className="app">
        <Display result={calculation} />
        <ButtonPanel handleInput={data => this.handleInput(data)} />
      </div>
    );
  }
}

export default App;
