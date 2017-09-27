import React, { PropTypes, Component } from 'react';
import Menu from '../View/Menu/index.js';
import Services from '../../services/index.js';
import classnames from 'classnames';

import { Table, Grid, Panel, Button } from 'react-bootstrap';
import $ from 'jquery';
import './style.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {

  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('App', className)} {...props}>
        <Menu />
        <Grid>
          <Panel header={'Relatorios'}>
            <Services url="http://172.20.1.54:8050/api/relatorios" />
          </Panel>
        </Grid>
      </div>
    );
  }
}

export default App;
