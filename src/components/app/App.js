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
    console.log(this.state); /* eslint no-console: "off" */
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="app">
        <Display result={next || total} />
        <ButtonPanel handleInput={data => this.handleClick(data)} />
      </div>
    );
  }
}

export default App;
