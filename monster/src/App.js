import React, { Component } from 'react'

//Components
import { CardList } from './components/card-list/card-list.components'
export default class App extends Component {
  state = {
    monsters: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  };

  render() {
    return (
      <div className='App'>
      <CardList monsters={this.state.monsters} /> 
      </div>
    )
  };
};
