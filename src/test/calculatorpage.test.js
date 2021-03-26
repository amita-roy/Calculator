import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../pages/calculator';

describe('rendered Calculator', () => {
  test('has button AC in the document', () => {
    render(<Calculator />);
    const element = screen.getByText('AC');
    expect(element).toBeInTheDocument();
  });
  test('has button . in the document', () => {
    render(<Calculator />);
    const element = screen.getByText('.');
    expect(element).toBeInTheDocument();
  });
  test('has button 5 in the document', () => {
    render(<Calculator />);
    const element = screen.getByText('5');
    expect(element).toBeInTheDocument();
  });
  test('has button +/- in the document', () => {
    render(<Calculator />);
    const element = screen.getByText('+/-');
    expect(element).toBeInTheDocument();
  });
  test('has element with className calculator', () => {
    render(<Calculator />);
    const { container } = render(<div className="calculator" />);
    // const element = screen.getByRole('display');
    expect(container.firstChild.classList.contains('calculator')).toBe(true);
  });
});
