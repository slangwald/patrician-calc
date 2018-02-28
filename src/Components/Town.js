import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Town extends Component {
  getTotalPeople() {
    return this.props.town.rich_people + this.props.town.wealthy_people + this.props.town.poor_people
  }
  render(){
    //console.log(this.props)
    let link="/town/" + this.props.town.name
    return (
      <tr>
        <td><Link to={link}>{this.props.town.name}</Link></td>
        <td>{this.props.town.rich_people}</td>
        <td>{this.props.town.wealthy_people}</td>
        <td>{this.props.town.poor_people}</td>
        <td>{this.getTotalPeople()}</td>
      </tr>
    )
  }
}

export default Town;
