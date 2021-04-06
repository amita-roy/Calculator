import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  const activeStyle = {
    color: '#f45b53',
    borderBottom: '1px solid #f45b53',
    paddingBottom: '10px',
    fontWeight: '500',
    fontFamily: 'Halvetica, sans-serif',
    transition: 'all 0.3s ease-in',
  };
  return (
    <div className="navigation">
      <p className="brand">Math-Magician</p>
      <nav className="nav-items">
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/calculator" activeStyle={activeStyle}>
          Calculator
        </NavLink>
        <NavLink to="/quotes" activeStyle={activeStyle}>
          Quotes
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
