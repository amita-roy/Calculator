import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = props => {
  const { result } = props;
  const length = result && result.length;
  const size = length <= 11 ? '55px' : `${55 - (length * 2.5) / 2}px`;

  return (
    <div className="display">
      <span style={{ fontSize: size }}>{result || '0'}</span>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
