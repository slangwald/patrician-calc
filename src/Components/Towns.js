import React, { Component } from 'react';
import Town from './Town'
import { Table } from 'reactstrap'

class Towns extends Component {

  render(){
    let towns;
    if (this.props.towns){
      towns = this.props.towns.map(town => <Town key={town.name} town={town} />)
    }

    console.log(this.props)
    return (
      <Table size='sm' striped>
        <thead>
          <tr>
            <th>Town</th>
            <th>Rich</th>
            <th>Wealthy</th>
            <th>Poor</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {towns}
        </tbody>
      </Table>
    )
  }
}

export default Towns;
