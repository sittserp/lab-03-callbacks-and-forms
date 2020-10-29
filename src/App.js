import './App.css';
import React, { Component } from 'react';
import PokeList from './PokeList.js';
import Sort from './Sort';


export default class App extends Component {

  state = {
    sortType: '',
    order: ''
  }

  handleSortType = e => {
    this.setState({
      sortType: e.target.value
    })
  }

  handleOrder = e => {
    this.setState({
      order: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Sort handleSortType={this.handleSortType}
          handleOrder={this.handleOrder} />
        <PokeList sortType={this.state.sortType}
          order={this.state.order} />
      </div>
    )
  }
}


