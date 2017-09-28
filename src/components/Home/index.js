import React, { PropTypes, Component } from 'react';
import App from '../App/index.js';
import Services from '../../services/index.js';
import classnames from 'classnames';
import { Grid, Panel } from 'react-bootstrap';

class Home extends Component {

  render() {
    const { className, ...props } = this.props;

    return (
      <App>
        <Grid>
          <Panel header={'Home'}>
            <Services url="http://172.20.1.54:8050/api/relatorios"/>
          </Panel>
        </Grid>
      </App>
    );
  }
}

export default Home;
