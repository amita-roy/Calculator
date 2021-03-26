import React from 'react';
import Calculator from '../components/calculator/Calculator';
import './calculator-page.css';

const CalculatorPage = () => (
  <div className="calculator-page">
    <Calculator />
    <p className="bottom-text">
      Mathematics is a hard thing to love. It has the unfortunate habit,
      like a rude dog, of turning its most unfavourable side towards you when you first
      make contact with it.
    </p>
  </div>
);

export default CalculatorPage;
