import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/calculator">Calculator</Link>
    <Link to="/quotes">Quotes</Link>
  </nav>
);

export default Navigation;
