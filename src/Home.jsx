import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataProvider from './context/DataContext';
import About from './router/About';
import Item from './router/Item';
import Nav from './router/Nav';
import Users from './router/Users';
import './style.css';

function Home() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" component={Item} />
        </Switch>
      </Router>
    </DataProvider>
  );
};
export default Home;
