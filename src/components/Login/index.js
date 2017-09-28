import React, { PropTypes, Component } from 'react';
import App from '../App/index.js';
import Services from '../../services/index.js';
import classnames from 'classnames';
import $ from 'jquery';
import { FormGroup, FormControl, ControlLabel, Form, Table, Grid, Panel, Button } from 'react-bootstrap';

import './style.css';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    
    let usuario = window.sessionStorage.getItem("usuario")
    let email = window.sessionStorage.getItem("email")
    let password = window.sessionStorage.getItem("password")


    console.log(this.state.email);

    if (this.state.email == email && this.state.password == password) {
      window.location.href = '/';
      event.preventDefault();      
      return false;
    }

    alert('Usuario ou Senha estão errados.');

  }

  handleClickRegistro = event => {
    window.location.href = '/registro'
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <Button
            block
            bsStyle="danger"
            bsSize="large"
            type="button"
            onClick={this.handleClickRegistro}
          >
            Registrar
          </Button>
        </form>
      </div>
    );
  }
}