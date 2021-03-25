/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const buttonId = {
  '=': 'equal',
  0: 'zero',
  AC: 'clear',
};

const Button = props => {
  const [isTapped, setIsTapped] = useState(false);

  const reset = () => {
    setIsTapped(false);
  };

  const handleClick = event => {
    event.preventDefault();
    setIsTapped(true);

    const { handleClick, name } = props;

    setTimeout(reset, 100);

    return handleClick(name);
  };

  const { name } = props;

  return (
    <button
      type="button"
      className={`button ${isTapped ? 'tapped' : ''}`}
      id={buttonId[name]}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
