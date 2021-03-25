import React, { useState } from 'react';
import ButtonPanel from '../buttonPanel/ButtonPanel';
import Display from '../display/Display';
import calculate from '../../logic/calculate';

import './App.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    const data = { total, next, operation };
    const calculation = calculate(data, buttonName);
    setTotal(calculation.total);
    setNext(calculation.next);
    setOperation(calculation.operation);
  };

  return (
    <div className="app">
      <div className="calculator">
        <Display result={(next && next.toString()) || (total && total.toString())} />
        <ButtonPanel handleClick={data => handleClick(data)} />
      </div>
    </div>
  );
};

export default App;
