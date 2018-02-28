import React, { Component } from 'react';
import BusinessesConfig from '../BusinessesConfig';

class GoodNeeded extends Component {
  constructor() {
    super();
    this.producedByBusinesses = {};
    this.requiredByBusinesses = {};
    this.netRequiredGoods = {};
  }

  calculateBusinessRequirements(town) {
    if (town.businesses) {
      // console.log(BusinessesConfig.map(t => console.log(t.name)));
      BusinessesConfig.map(businessConfig => {
        if (town.businesses[businessConfig.name]) {
          Object.keys(businessConfig.requires).map(key => {
            if (!this.requiredByBusinesses[key]) {
              this.requiredByBusinesses[key] = 0;
            }
            this.requiredByBusinesses[key] +=
              town.businesses[businessConfig.name] *
              businessConfig.requires[key];
          });
          Object.keys(businessConfig.produces).map(key => {
            if (!this.producedByBusinesses[key]) {
              this.producedByBusinesses[key] = 0;
            }
            this.producedByBusinesses[key] +=
              town.businesses[businessConfig.name] *
              businessConfig.produces[key];
          });
        }
      });
      Object.keys(this.producedByBusinesses).map(key => {
        if (!this.netRequiredGoods[key]) {
          this.netRequiredGoods[key] = 0;
        }
        this.netRequiredGoods[key] -= Math.ceil(this.producedByBusinesses[key]);
      });
      Object.keys(this.requiredByBusinesses).map(key => {
        if (!this.netRequiredGoods[key]) {
          this.netRequiredGoods[key] = 0;
        }
        this.netRequiredGoods[key] += Math.ceil(this.requiredByBusinesses[key]);
      });
    }
  }

  calculateNeed(town, good) {
    return Math.ceil(
      town.rich_people * good.rich_people +
        town.wealthy_people * good.wealthy_people +
        town.poor_people * good.poor_people
    );
  }

  render() {
    // console.log(this.props)
    this.calculateBusinessRequirements(this.props.town);
    let neededGoods = this.props.good_config.map(good => {
      let neededGood = this.calculateNeed(this.props.town, good);
      let requiredByBusinesses = 0;
      if (this.netRequiredGoods[good.name]) {
        requiredByBusinesses = this.netRequiredGoods[good.name];
      }
      let isProducedHere = 'black';
      if (this.props.town.produces.includes(good.name)) {
        isProducedHere = 'grey';
      }
      return (
        <td key={this.props.town.name + '-' + good.name}>
          <span className={isProducedHere}>
            {(neededGood + requiredByBusinesses) *
              this.props.town.reserve_multiplier}
          </span>
        </td>
      );
    });
    return (
      <tr>
        <th scope="row">{this.props.town.name}</th>
        {neededGoods}
      </tr>
    );
  }
}

export default GoodNeeded;
