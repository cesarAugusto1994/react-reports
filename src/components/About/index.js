// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import Menu from '../View/Menu/index.js';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>

        <Menu/>

        <h1>
          About <a href="/">Link</a>
        </h1>
      </div>
    );
  }
}