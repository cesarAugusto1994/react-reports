// src/components/NotFound/index.js
import React, { PropTypes, Component } from 'react';
import Menu from '../View/Menu/index.js';
import classnames from 'classnames';

import './style.css';

export default class NotFound extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <Menu/>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}