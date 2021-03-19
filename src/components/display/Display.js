import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = props => {
  const { result } = props;
  return <div className="display">{ result || '0' }</div>;
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
