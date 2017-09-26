import React, { PropTypes, Component } from 'react';
import Menu from '../Menu/index.js';
import classnames from 'classnames';

import { Table, Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';

import $ from 'jquery';

import logo from './logo.svg';
import './style.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor() {
    super()
    this.state = {
      relatorios: []
    }
  }

  componentDidMount() {
    
        let self = this;
    
        let dataStored = localStorage.getItem('relatorios');
    
        if (dataStored == 0) {
          this.setState({ relatorios: dataStored })
        } else {
          $.ajax({
            url: 'http://172.20.1.54:8050/api/relatorios',
            dataType: "json",
            type: 'GET',
            success: function (result) {
              self.setState({ relatorios: result })
              localStorage.setItem('relatorios', result);
            },
            error: function (result) {
              console.log("error");
            }
          })
        }
      }

  render() {
    const { className, ...props } = this.props;

    localStorage.setItem('nome', 'Cesar');
    let nome = localStorage.getItem('nome');

    return (
      <div className={classnames('App', className)} {...props}>
       <Menu/>
        <h1>
          Relatorios
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
                this.state.relatorios.map(function (relatorio) {
                  return <tr key={relatorio.id}>
                    <td>{relatorio.id}</td>
                    <td>{relatorio.nome}</td>
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

export default App;
