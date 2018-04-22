import React, { Component } from 'react';
import './Farm.css';
import Order from 'components/Order';
import { connect } from 'react-redux';

import { moveOrderToCustomer } from 'actions/farmActions';

const mapDispatchToProps = {
  moveOrderToCustomer
};

class Farm extends Component {

  state = {
    isDisabled: true
  }

  handleSendClick = () => {
    this.props.moveOrderToCustomer();
  }

  render() {
    const { orders } = this.props;
    const { isDisabled } = this.state;
    // console.log(orders);

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={isDisabled}
          onClick={this.handleSendClick}
        >Отправить урожай клиенту
        </button>
        <Order orders={orders} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.market,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm)






