import React, { Component } from 'react'
import goodsConfig from '../GoodsConfig'
import businessesConfig from '../BusinessesConfig'
import { Table } from 'reactstrap'
import {calculateProductionInTown, calculateProductionInHansa} from '../functions'

class Production extends Component {

  render(){
    let goodsTable = {}
    let goods = goodsConfig.map((good) => { return goodsTable[good.name] = {name:good.name, biz:0, produced:0, balance:0}} )

    let perProduct = calculateProductionInHansa(this.props.towns, goodsConfig, businessesConfig)

    let goodsTd = Object.entries(goodsTable).map((entry) => {
      let goodsName = entry[1].name
      return (
        <tr>
          <td>{entry[1].name}</td>
          <td>{perProduct[goodsName].numberOfBusinesses}</td>
          <td>{Math.round(perProduct[goodsName].production)}</td>
          <td>{Math.round(perProduct[goodsName].production - perProduct[goodsName].required)}</td>
          <td>{Math.round(perProduct[goodsName].citizenNeeds)}</td>
          <td>{Math.round(perProduct[goodsName].production - perProduct[goodsName].required - perProduct[goodsName].citizenNeeds)}</td>
        </tr>
      )
    })
    return (
      <Table size='sm' striped hover>
        <thead>
          <tr>
            <th>Good</th>
            <th># of Biz</th>
            <th>Produced</th>
            <th>Balance</th>
            <th>Citizen</th>
            <th>total needed</th>
          </tr>
        </thead>
        <tbody>
          {goodsTd}
        </tbody>
      </Table>
    )

  }
}

export default Production;
