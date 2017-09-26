// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import Menu from '../Menu/index.js';
import classnames from 'classnames';
import $ from 'jquery';

import { Table, Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';

import './style.css';

export default class Queries extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor() {
    super()
    this.state = {
      queries: []
    }
  }

  componentDidMount() {

    let self = this;

    let dataStored = localStorage.getItem('colecoes');

    if (dataStored.length == 0) {
      this.setState({ queries: dataStored })
    } else {
      $.ajax({
        url: 'http://172.20.1.54:8050/api/queries',
        dataType: "json",
        type: 'GET',
        success: function (result) {
          self.setState({ queries: result })
          localStorage.setItem('colecoes', result);
        },
        error: function (result) {
          console.log("error");
        }
      })
    }
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Queries', className)} {...props}>

        <Menu />

        <h1>
          Queries
        </h1>
        <div>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Opc</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.queries.map(function (query) {
                  return <tr key={query.id}>
                    <td>{query.nome}</td>
                    <td>{query.execute}</td>
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