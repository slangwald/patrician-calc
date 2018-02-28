import React, { Component } from 'react';
import GoodNeeded from './GoodNeeded';
import { Table } from 'reactstrap';

class GoodsNeeded extends Component {
  render() {
    //console.log(this.props)

    let goods_headers = this.props.goods_config.map(good => (
      <th key={good.name}>{good.name}</th>
    ));

    let goods_needed = this.props.towns.map(town => (
      <GoodNeeded
        key={'GoddNeeded-' + town.name}
        town={town}
        good_config={this.props.goods_config}
      />
    ));

    return (
      <Table size="sm" bordered hover>
        <thead>
          <tr>
            <th />
            {goods_headers}
          </tr>
        </thead>
        <tbody>
          {goods_needed}
          <tr>
            <th />
            {goods_headers}
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default GoodsNeeded;
