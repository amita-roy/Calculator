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
  handleClick = name => {
    const { handleClick } = this.props;
    handleClick(name);
  };

  renderButtons = group => group.map(name => (
    <Button
      key={name}
      name={name}
      handleClick={item => this.handleClick(item)}
    />
  ));

  render() {
    const {
      group1, group2, group3, group4, group5,
    } = BUTTONGROUP;

    return (
      <div>
        <div className="btn-panel-wrapper">
          <div className="bg-btn-panel">
            <div className="btn-panel">
              <div className="row">{this.renderButtons(group1)}</div>
              <div className="row">{this.renderButtons(group2)}</div>
              <div className="row">{this.renderButtons(group3)}</div>
              <div className="row">{this.renderButtons(group4)}</div>
              <div className="row" id="row5">
                {this.renderButtons(group5)}
              </div>
            </div>
          </div>
        </div>
        <Button
          name="="
          handleClick={item => this.handleClick(item)}
        />
      </div>
    );
  }
}

ButtonPanel.propTypes = { handleClick: PropTypes.func.isRequired };

export default ButtonPanel;
