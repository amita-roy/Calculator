import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => {
  const { name } = props;
  return <div className="btn">{name}</div>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
