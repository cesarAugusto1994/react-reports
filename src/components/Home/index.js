import React, { PropTypes, Component } from 'react';
import App from '../App/index.js';
import Services from '../../services/index.js';
import classnames from 'classnames';
import { Table, Grid, Panel, Button } from 'react-bootstrap';

class Home extends Component {

  render() {
    const { className, ...props } = this.props;

    return (
      <App>
        <Grid>
          <Panel header={'Home'}>
            <h1>
              ...
            </h1>
          </Panel>
        </Grid>
      </App>
    );
  }
}

export default Home;
