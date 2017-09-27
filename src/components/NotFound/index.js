// src/components/NotFound/index.js
import React, { PropTypes, Component } from 'react';
import Menu from '../View/Menu/index.js';
import classnames from 'classnames';

import { Table, Grid, Panel, Button } from 'react-bootstrap';

import './style.css';

export default class NotFound extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <Menu />
        <Grid>
          <Panel header={'Erro'}>
            <h1>
              404 <small>Not Found :(</small>
            </h1>
          </Panel>
        </Grid>
      </div>
    );
  }
}