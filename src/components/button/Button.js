/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleClick = () => {
    const { handleClick, name } = this.props;
    if (name) {
      handleClick(name);
    }
  }

  renderButton = name => {
    if (name === '=') {
      return <button type="button" id="equal" className="btn" onClick={this.handleClick}>{name}</button>;
    }
    return <button type="button" className="btn" onClick={this.handleClick}>{name}</button>;
  }

  render() {
    const { name } = this.props;
    return (this.renderButton(name));
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
