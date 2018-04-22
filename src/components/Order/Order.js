import React from 'react';
import './Order.css';

import { connect } from 'react-redux';

import {
  createOrder,
  moveOrderToFarm
} from 'actions/marketActions';

import { moveOrderToCustomer } from 'actions/farmActions';

const Order = (props, createOrder, moveOrderToFarm, moveOrderToCustomer) => {

  const { orders } = props;

  return (
    <div className="app" >
      {orders.map(order => (
        <div className="order" key={order.id}>
          <div className="order_upper">
            <p className="p--order">{order.name}</p>
            <p className="p--order">
              <span className="order-price">{order.price}</span>
            </p>
          </div>
          <div className="order_lower">
            <p className="p--order">{order.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
// {market.map(order => (
//   <p key={order.id}>{`Order: ${order.name}, id: ${order.id}`}</p>
// ))}

/**
 *
 * Передаем состояние в props компоненты
 */
const mapStateToProps = state => ({
  orders: state.market,
});

/**
 * Передаем диспатч экшенов в пропсы
 * Длинный и короткий синтаксис
 */
// const mapDispatchToProps = dispatch => ({
//   createOrder: (id, name) => dispatch(createOrder(id, name)),
//   moveOrderToFarm: (id, name) => dispatch(moveOrderToFarm(id, name)),
//   moveOrderToCustomer: (id, name) => dispatch(moveOrderToCustomer(id, name))
// });
const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm,
  moveOrderToCustomer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
