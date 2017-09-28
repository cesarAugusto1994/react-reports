// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import App from '../App/index.js';
import Services from '../../services/index.js';
import classnames from 'classnames';
import { Table, Grid, Panel, Button } from 'react-bootstrap';

export default class Tabelas extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Tabelas', className)} {...props}>
        <App>
          <Grid>
            <Panel header={'Tabelas'}>
              <Services url="http://172.20.1.54:8050/api/tables" target="/tabela/" />
            </Panel>
          </Grid>
        </App>
      </div>
    );
  }
}