// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import App from '../App/index.js';
import classnames from 'classnames';
import { Table, Grid, Panel, Button } from 'react-bootstrap';

//import './style.css';

export default class Tabela extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <App>
        <Grid>
          <Panel header={'Tabela'}>
            <h1>
              ...
            </h1>
          </Panel>
        </Grid>
      </App>
    );
  }
}