// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import Menu from '../View/Menu/index.js';
import Services from '../../services/index.js';
import classnames from 'classnames';
import $ from 'jquery';

import { Table, Grid, Panel, Button } from 'react-bootstrap';

import './style.css';

export default class Tabelas extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Tabelas', className)} {...props}>
        <Menu />
        <Grid>
          <Panel header={'Tabelas'}>
          <Services url="http://172.20.1.54:8050/api/tables" />
          </Panel>
        </Grid>
      </div>
    );
  }
}