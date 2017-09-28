import React, { PropTypes, Component } from 'react';
import App from '../App/index.js';
import Services from '../../services/index.js';
import classnames from 'classnames';
import $ from 'jquery';
import { FormGroup, FormControl, ControlLabel, Form, Table, Grid, Panel, Button } from 'react-bootstrap';

import './style.css';

export default class Registro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.nome.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    window.sessionStorage.setItem("usuario", this.state.nome)
    window.sessionStorage.setItem("email", this.state.email)
    
    window.location.href = '/';

  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="nome" bsSize="large">
            <ControlLabel>Nome</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
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
            Salvar
          </Button>
        </form>
      </div>
    );
  }
}