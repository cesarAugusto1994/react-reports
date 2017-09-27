import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';

import logo from '../../App/logo.svg';
import './style.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Menu extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('App', className)} {...props}>

        <Navbar default>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Relatorios App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav>
                <NavItem className="active" eventKey={1} href="/tables">Tabelas</NavItem>
                <NavItem eventKey={2} href="/queries">Queries</NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="/about">About</NavItem>
              </Nav>
            </Navbar.Collapse>

          </Grid>
        </Navbar>

      </div>
    );
  }
}

export default Menu;
