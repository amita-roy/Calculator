import React, { Component } from 'react';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import Display from '../display/Display';
import calculate from '../../logic/calculate';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { total: null, next: null, operation: null };
  }

  handleClick = buttonName => {
    const data = { ...this.state };
    const calculation = calculate(data, buttonName);
    this.setState({ ...calculation });
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="app">
        <div className="calculator">
          <Display result={(next && next.toString()) || (total && total.toString())} />
          <ButtonPanel handleClick={data => this.handleClick(data)} />
        </div>
      </div>
    );
  }
}

export default App;
