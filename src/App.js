import React from 'react';
import './style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import Topics from './components/pages/Topics';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Topics" exact component={Topics} />
        </Switch>
      </Router>
    </>
  );
}
