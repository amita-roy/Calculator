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

  render() {
    const { name } = this.props;
    return <button type="button" className="btn" onClick={this.handleClick}>{name}</button>;
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
