import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import { Table, Grid, Panel, Button } from 'react-bootstrap';

import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Services extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      header: []
    }
  }

  componentDidMount() {

    let self = this;

    $.ajax({
      url: self.props.url,
      dataType: "json",
      type: 'GET',
      success: function (result) {
        self.setState({ header: result })
        self.setState({ data: result })
      },
      error: function (result) {
        console.log("error");
      }
    })
  }

  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('Services', className)} {...props}>
        <Table striped bordered condensed hover>
          <thead>
            
          </thead>
          <tbody>
            {
              this.state.data.map(function (item) {
                return <tr key={item.id}>
                  <td>{item.nome}</td>
                </tr>;
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Services;
