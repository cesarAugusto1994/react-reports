import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import { Table, Grid, Panel, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Services extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      header: [],
      counter: 0
    }
    this.props = {
      cols: ['Nome'],
      target: ''
    }
  }

  componentDidMount() {

    let self = this;

    $.ajax({
      url: self.props.url,
      dataType: "json",
      type: 'GET',
      success: function (result) {
        self.setState({ data: result })
        self.setState({ counter: result[0] })
      },
      error: function (result) {
        console.log("error");
      }
    })
  }

  onRowClick(row) {
    window.location.href = '/tabelas/' + row.nome
  }

  render() {
    const { className, ...props } = this.props;
    let self = this;

    const selectRow = {
      mode: 'checkbox',  // multi select
      clickToSelect: true
    };

    const options = {
      clearSearch: true,
      onRowClick: this.onRowClick
    };

    return (
      <div className={classnames('Services', className)} {...props}>

        <BootstrapTable
          ref='table'
          data={this.state.data}
          pagination={true}
          search={true}
          options={options}
          multiColumnSearch={true}>
          <TableHeaderColumn dataField='nome' isKey={true} export dataSort={true}>Nome</TableHeaderColumn>
        </BootstrapTable>

      </div>
    );
  }
}

export default Services;
