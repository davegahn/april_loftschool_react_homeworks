import React, { Component } from 'react';
import './Farm.css';
import Order from 'components/Order';
import { connect } from 'react-redux';

import { moveOrderToCustomer } from 'actions/farmActions';

class Farm extends Component {
  state = {
    isDisabled: true,
  };

  componentWillReceiveProps() {
    this.setState({ isDisabled: false });
  }

  handleMoveOrderToCustomer = () => {
    const { moveOrderToCustomer, orders } = this.props;
    // orders.orders.pop();
    moveOrderToCustomer();
  };

  render() {
    const { orders } = this.props;
    const { isDisabled } = this.state;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={isDisabled} onClick={this.handleMoveOrderToCustomer}>
          Отправить урожай клиенту
        </button>
        {/* <Order orders={orders} /> */}
      </div>
    );
  }
}

const mapDispatchToProps = {
  moveOrderToCustomer,
};

const mapStateToProps = state => ({
  orders: state.farm,
  profit: state.farm.profit,
  productionPrice: state.farm.productionPrice,
});

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
