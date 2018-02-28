import React, { Component } from 'react'
import goodsConfig from '../GoodsConfig'
import businessesConfig from '../BusinessesConfig'
import { Table } from 'reactstrap'
import {
  calculateProductionInTown,
  calculateProductionInHansa
} from '../functions'

class Production extends Component {

  render(){
    let perProduct = calculateProductionInHansa(this.props.towns, goodsConfig, businessesConfig)
    let goodsTd = Object.entries(goodsConfig).map((entry) => {
      let goodsName = entry[1].name
      let totalNeed = perProduct[goodsName].production - perProduct[goodsName].required - perProduct[goodsName].citizenNeeds
      let businessesNeeded = Object.entries(businessesConfig).map((entry) => {
        if (entry[1].produces[goodsName]) {
          //console.log(entry[1].name + " produces " + entry[1].produces[goodsName] + " " + goodsName)
          return <span>{entry[1].name}: {Math.ceil(totalNeed / entry[1].produces[goodsName])} <br/></span>
        }
        return ""
      })
      return (
        <tr>
          <td>{goodsName}</td>
          <td>{perProduct[goodsName].numberOfBusinesses}</td>
          <td>{Math.round(perProduct[goodsName].production)}</td>
          <td>{Math.round(perProduct[goodsName].production - perProduct[goodsName].required)}</td>
          <td>{Math.round(perProduct[goodsName].citizenNeeds)}</td>
          <td>{Math.round(totalNeed)}</td>
          <td>{businessesNeeded}</td>
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
            <th>total biz needed</th>
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
