import React from 'react';
import './style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Stats from './components/pages/Stats';
import Topics from './components/pages/Topics';
import About from './components/pages/About';
import TopicGenerator from './components/pages/TopicGenerator';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Stats} />
          <Route path="/Topics" exact component={Topics} />
          <Route path="/About" exact component={About} />
          <Route path="/TopicGenerator" exact component={TopicGenerator} />
        </Switch>
      </Router>
    </>
  );
}
