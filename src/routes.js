// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import Queries from './components/Queries';
import Tabelas from './components/Tabelas';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/queries" component={Queries} />
    <Route path="/tables" component={Tabelas} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;