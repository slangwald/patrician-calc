import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Towns from './Components/Towns'
import GoodsNeeded from './Components/GoodsNeeded'
import goodsConfig from './GoodsConfig'
import townConfig from './TownConfig'
import Production from './Components/Production'
import TownRoute from './Components/TownRoute'

class IndexApp extends Component {

  constructor() {
    super()
    this.state = {
      towns: [],
      goods_config: []
    }

  }

  componentWillMount() {
    this.setState({towns: townConfig})

    this.setState({goods_config: goodsConfig})
  }

  handleAddTown(town) {
    let state = this.state
    state.towns.push(town)
    this.setState(state)
  }

  handleEditTown(town) {
    let state = this.state

  }

  render() {
    return (
      <div className="App">
        <Towns towns={this.state.towns} />
        <GoodsNeeded towns={this.state.towns}
                     goods_config={this.state.goods_config} />
        <Production towns={this.state.towns} />

      </div>
    );
  }
}

const RoutedApp = () => (
  <Router>
    <div>
          <Link to="/">Home</Link>
          
      <hr />

      <Route exact path="/" component={IndexApp} />
      <Route path="/town/:town" component={TownRoute} />
    </div>
  </Router>
);



export default RoutedApp;
