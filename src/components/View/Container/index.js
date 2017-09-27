import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Container extends Component {

  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('Container', className)} {...props}>
        <div className="container">
          {props.children}
        </div>
      </div>
    );
  }
}

export default Menu;
