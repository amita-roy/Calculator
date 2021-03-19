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
  handleClick = event => {
    event.preventDefault();
    const { handleClick, name } = this.props;
    return handleClick(name);
  };

  render() {
    const { name } = this.props;
    return (
      <button
        type="button"
        className="button"
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
