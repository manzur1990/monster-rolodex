import React, { Component } from 'react'


export default class App extends Component {
  state = {
    mosnters: [
      {
        name: 'Frankenstien'
       },
       {
         name: 'Dracula'
        },
        {
         name: 'El Cadejo'
        },
    ]
   }

  render() {
    return (
      <div className='App'>
        <header className='App-header'></header>
        <img src="" alt="logo" className="App-logo"/>
      </div>
    )
  }
}
