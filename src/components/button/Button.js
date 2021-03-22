/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const buttonId = {
  '=': 'equal',
  0: 'zero',
  AC: 'clear',
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { isTapped: false };
  }

  reset = () => {
    this.setState({ isTapped: false });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({ isTapped: true });

    const { handleClick, name } = this.props;

    setTimeout(this.reset, 100);

    return handleClick(name);
  };

  render() {
    const { name } = this.props;
    const { isTapped } = this.state;
    return (
      <button
        type="button"
        className={`button ${isTapped ? 'tapped' : ''}`}
        id={buttonId[name]}
        onClick={this.handleClick}
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
