import React, { Component } from 'react';
import Towns from './Components/Towns'
import GoodsNeeded from './Components/GoodsNeeded'
import goodsConfig from './GoodsConfig'
import townConfig from './TownConfig'

class App extends Component {

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
      </div>
    );
  }
}

export default App;
