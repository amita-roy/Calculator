import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Home from '../../pages/home';
import Calculator from '../../pages/calculator';
import Quotes from '../../pages/quotes';

import './App.css';

const App = () => (
  <div className="app">
    <div className="header">
      <Navigation />
    </div>
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/quotes" component={Quotes} />
      </Switch>
    </div>
  </div>
);

export default App;
