import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/home';

describe('rendered Home', () => {
  test('has Title', () => {
    render(<Home />);
    const element = screen.getByText('MATH AND SUCCESS ADD UP');
    expect(element).toBeInTheDocument();
  });

  test('has an image', () => {
    render(<Home />);
    const element = screen.getByAltText('illustration');
    expect(element).toBeInTheDocument();
  });
});
