import React, { Component } from 'react';
import TownConfig from '../TownConfig';
import BusinessesConfig from '../BusinessesConfig';
import GoodsConfig from '../GoodsConfig';
import { calculateProductionInTown } from '../functions';
import { Table } from 'reactstrap';

class TownRoute extends Component {
  render() {
    let townId = this.props.match.params.town;
    let town = TownConfig.filter(town => town.name === townId)[0];
    let production = calculateProductionInTown(
      town,
      GoodsConfig,
      BusinessesConfig
    );
    console.log(production);
    let productTable = GoodsConfig.map(good => {
      let toShip =
        production.citizenNeeds[good.name] +
        (production.netRequirements[good.name] || 0) -
        (production.production[good.name] || 0);
      let toShipWithReserve = Math.ceil(toShip * town.reserve_multiplier * 1.1);
      return (
        <tr>
          <th>{good.name}</th>
          <td>{toShipWithReserve}</td>
          <td>{production.citizenNeeds[good.name]}</td>
          <td>{Math.ceil(production.netRequirements[good.name] || 0)}</td>
          <td>{toShip}</td>
        </tr>
      );
    });

    let tradingOffice = GoodsConfig.map(good => {
      let toShip = production.requirements[good.name] || 0;
      let toShipWithReserve = Math.ceil(toShip * town.reserve_multiplier * 1.1);
      return (
        <tr>
          <th>{good.name}</th>
          <td>{toShipWithReserve}</td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Route to {townId}</h2>
        <Table size="sm" striped>
          <thead>
            <tr>
              <th>Good</th>
              <th>To ship</th>
              <th>Citizen</th>
              <th>Biz</th>
              <th>Total w Reserves</th>
            </tr>
          </thead>
          <tbody>{productTable}</tbody>
        </Table>
        <h2>Trading office config in {townId}</h2>
        <Table size="sm" striped>
          <tbody>{tradingOffice}</tbody>
        </Table>
      </div>
    );
  }
}

export default TownRoute;
