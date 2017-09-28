// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Login from './components/Login';
import Registro from './components/Registro';
import Home from './components/Home';
import About from './components/About';
import Queries from './components/Queries';
import Tabelas from './components/Tabelas';
import Tabela from './components/Tabela';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/registro" component={Registro} />
    <Route path="/about" component={About} />
    <Route path="/queries" component={Queries} />
    <Route path="/tables" component={Tabelas} />
    <Route path="/table/:nome" component={Tabela} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;