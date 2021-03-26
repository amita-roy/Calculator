import React from 'react';
import './home.css';
// import Illustration from '../assets/images/undraw_mathematics_4otb.svg';
import Illustration from '../assets/images/undraw_mathematics_4otb2.svg';

const Home = () => (
  <div className="home">
    <div className="home-content">
      <h3 className="tagline">MATH AND SUCCESS ADD UP</h3>
      <p className="left-text">
        Mathematics is on the artistic side a creation of new rhythms,
        orders, designs, harmonies, and on the knowledge side, is a systematic
        study of various rhythms, orders.
      </p>
    </div>
    <div className="illustration">
      <img src={Illustration} alt="illustration" />
    </div>
  </div>
);

export default Home;
