import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../button/Button';

import './ButtonPanel.css';

const BUTTONGROUP = {
  group1: ['AC', '+/-', '%', '÷'],
  group2: ['7', '8', '9', 'x'],
  group3: ['4', '5', '6', '-'],
  group4: ['1', '2', '3', '+'],
  group5: ['0', '.'],
};

class ButtonPanel extends Component {
  handleInput = name => {
    const { handleInput } = this.props;
    handleInput(name);
  };

  renderButtons = group => group.map(item => (
    <Button key={item} name={item} handleClick={item => this.handleInput(item)} />
  ));

  render() {
    const {
      group1, group2, group3, group4, group5,
    } = BUTTONGROUP;

    return (
      <div className="btn-panel">
        <div className="row">{this.renderButtons(group1)}</div>
        <div className="row">{this.renderButtons(group2)}</div>
        <div className="row">{this.renderButtons(group3)}</div>
        <div className="row">{this.renderButtons(group4)}</div>
        <div className="row">{this.renderButtons(group5)}</div>
        <div className="row">
          <Button name="=" handleClick={item => this.handleInput(item)} />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = { handleInput: PropTypes.func.isRequired };

export default ButtonPanel;
