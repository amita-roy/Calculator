import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => (
  <div className="navigation">
    <p className="brand">Math-Magician</p>
    <nav className="nav-items">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  </div>
);

export default Navigation;
