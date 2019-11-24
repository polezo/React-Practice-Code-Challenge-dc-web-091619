import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    currentSushis:[],
    eatenSushis:[],
    moneyLeft:40
  }

  componentDidMount = () => {
    fetch(API)
    .then(res=>res.json())
    .then(this.sushiSetter)
  }

  sushiEaten = (id,price) => {
    let money = this.state.moneyLeft
    
      if (price <= money) {
      this.setState({eatenSushis : this.state.eatenSushis.concat(id),
      moneyLeft:(this.state.moneyLeft - price)
     })
      
    } else {
      alert("you don't have enough money for that!")
    }
  }


  eatenSushi = (id) => {
    return this.state.eatenSushis.indexOf(id) === -1;
  }

  nextSushis = () => {
    let sushiHolder = this.state.currentSushis;
    let allSushi = [...this.state.allSushis];
    let nextSushi = allSushi.indexOf(sushiHolder[3])

    if (nextSushi === 99) {
      this.setState({currentSushis:allSushi.slice(0,4)})
    } else {
    this.setState({currentSushis:allSushi.slice((nextSushi+1),(nextSushi+5))})
    }
  }

  sushiSetter = (allSushis) => {
    let currentSushis = allSushis.slice(0,4)
    this.setState({allSushis,currentSushis})
  }

  moMoney = () => {
    let moneyLeft = this.state.moneyLeft + 40
    this.setState({moneyLeft})
  }

  render() {
    return (
      <div className="app">
        <div className="moMoney"><button onClick={this.moMoney}>MoMoney</button></div>
        <SushiContainer eaten={this.eatenSushi} sushis={this.state.currentSushis} eatSushi={this.sushiEaten} nextSushis={this.nextSushis}/>
        <Table plateCount={this.state.eatenSushis}moneyLeft={this.state.moneyLeft}/>
      </div>
    );
  }
}

export default App;