import React, { Component } from 'react';
import './App.css';
import Market from 'components/Market';
import Farm from 'components/Farm';
import Budget from 'components/Budget';

export class App extends Component {

  createOrder = () => { };
  moveOrderToFarm = () => { };
  moveOrderToCustomer = () => { };

  render() {
    return (
      <div className="app" >
        <Market orders={[]} createOrder={this.createOrder} moveOrderToFarm={this.moveOrderToFarm} />
        <Farm orders={[]} moveOrderToCustomer={this.moveOrderToCustomer} />
        <Budget market={100} delivery={200} profit={300} />
      </div >
    );
  }
}

export default App;
