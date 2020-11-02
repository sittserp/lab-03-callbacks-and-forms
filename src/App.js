import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import PokeList from './PokeList.js';
import Sort from './Sort';
import PaginatedList from './PaginatedList.js';


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
        <Router>
          <Nav />
          <Sort handleSortType={this.handleSortType}
            handleOrder={this.handleOrder} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/list"
              exact
              render={(routerProps) => <PokeList
                sortType={this.state.sortType}
                order={this.state.order}
                {...routerProps} />}
            />
            <Route
              path="/pagination"
              exact
              render={(routerProps) => <PaginatedList {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}


