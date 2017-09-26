// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
//import { browserHistory } from 'react-router';
import Routes from './routes';

import createBrowserHistory from 'history/lib/createBrowserHistory';
const browserHistory = createBrowserHistory();

//import './index.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);