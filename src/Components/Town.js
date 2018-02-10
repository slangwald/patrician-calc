import React, { Component } from 'react';


class Town extends Component {
  getTotalPeople() {
    return this.props.town.rich_people + this.props.town.wealthy_people + this.props.town.poor_people
  }
  render(){
    console.log(this.props)
    return (
      <tr>
        <td>{this.props.town.name}</td>
        <td>{this.props.town.rich_people}</td>
        <td>{this.props.town.wealthy_people}</td>
        <td>{this.props.town.poor_people}</td>
        <td>{this.getTotalPeople()}</td>
      </tr>
    )
  }
}

export default Town;
