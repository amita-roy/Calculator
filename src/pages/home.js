import React from 'react';
import './home.css';
import Illustration from '../assets/images/undraw_mathematics_4otb.svg';

const Home = () => (
  <div className="home">
    <div className="home-content">
      <p>LOrem</p>
    </div>
    <div className="illustration">
      <img src={Illustration} alt="illustration" />
    </div>
  </div>
);

export default Home;
