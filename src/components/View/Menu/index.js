import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import { Grid, Navbar, Nav, NavItem, Jumbotron, Button, NavDropdown, MenuItem } from 'react-bootstrap';

import logo from '../../App/logo.svg';
import './style.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Menu extends Component {

  constructor(props) {
    super(props);

    let usuario = window.sessionStorage.getItem("usuario");
    let email = window.sessionStorage.getItem("email");

    this.state = {
      usuario: usuario,
      email: email
    }
  }

  handleSessionDestroy = event => {
      window.sessionStorage.clear();
      window.location.href = '/login';
  }

  render() {
    const { className, ...props } = this.props;

    if (!this.state.usuario) {
      window.location.href = '/login';
    }

    return (
      <div className={classnames('App', className)} {...props}>

        <Navbar default>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Relat&oacute;rios</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav>
                <NavItem className="active" eventKey={1} href="/tables">Tabelas</NavItem>
                <NavItem eventKey={2} href="/queries">Queries</NavItem>
              </Nav>
              <Nav pullRight>
                <NavDropdown eventKey={1} title={this.state.usuario} id="basic-nav-dropdown">
                  <MenuItem eventKey={1.1} href="/login">Login</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={1.2} onClick={this.handleSessionDestroy}>Sair</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

          </Grid>
        </Navbar>

      </div>
    );
  }
}

export default Menu;
