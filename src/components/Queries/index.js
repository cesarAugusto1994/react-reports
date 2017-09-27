// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import Menu from '../View/Menu/index.js';
import Services from '../../services/index.js';
import classnames from 'classnames';
import $ from 'jquery';

import { Table, Grid, Panel, Button } from 'react-bootstrap';

import './style.css';

export default class Queries extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Queries', className)} {...props}>
        <Menu />
        <Grid>
          <Panel header={'Queries'}>
            <Services url="http://172.20.1.54:8050/api/queries" />
          </Panel>
        </Grid>
      </div>
    );
  }
}