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
    const lastOrder = orders[orders.length - 1];
    moveOrderToCustomer(lastOrder);
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
        <div className="order-list">
          {orders.map((order, idx) => <Order key={order.id} {...order} />)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  moveOrderToCustomer,
};

const mapStateToProps = state => ({ ...state.farm });

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
