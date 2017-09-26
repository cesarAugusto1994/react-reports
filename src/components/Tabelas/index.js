// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import Menu from '../Menu/index.js';
import classnames from 'classnames';
import $ from 'jquery';

import { Table, Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';

import './style.css';

export default class Tabelas extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor() {
    super()
    this.state = { tabelas: [] }
  }

  componentDidMount() {
    let self = this;
    $.ajax({
      url: 'http://172.20.1.54:8050/api/tables',
      dataType: "json",
      type: 'GET',
      success: function (result) {
        self.setState({ tabelas: result })
      },
      error: function (result) {
        console.log("error");
      }
    })
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Tabelas', className)} {...props}>

        <Menu />

        <h1>
          Tabelas
        </h1>
        <div>

          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.tabelas.map(function (tabela) {
                  return <tr key={tabela.id}>
                    <td>{tabela.id}</td>
                    <td>{tabela.nome}</td>
                    <td>{tabela.schema}</td>
                  </tr>;
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}