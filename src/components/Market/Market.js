import React, { Component } from 'react';
import './Market.css';

import Order from 'components/Order';

import { connect } from 'react-redux';

import { createOrder, moveOrderToFarm, countPriceToBudget } from 'actions/marketActions';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька',
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

class Market extends Component {
  state = {
    isDisabled: true,
  };

  moveOrderToBudget = () => {
    const { orders } = this.props;
    let result = 0;
    let prices = orders.orders.map(order => {
      return order.price;
    });
    let summ = prices.reduce((a, b) => {
      return a + b;
    }, 0);
    result += summ;
    return result;
  };

  handleCreateClick = () => {
    this.setState({ isDisabled: false });
    this.props.createOrder(getNewOrder());
    // this.moveOrderToBudget();
    // this.props.countPriceToBudget(this.moveOrderToBudget());
  };

  handleMoveOrderToFarm = () => {
    const { moveOrderToFarm, orders } = this.props;
    const lastOrder = orders.orders[orders.orders.length - 1];
    if (orders.orders.length > 0) {
      moveOrderToFarm(lastOrder);
      orders.orders.length -= 1;
    }
  };

  render() {
    const { orders } = this.props;
    const { isDisabled } = this.state;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button className="new-orders__create-button" onClick={this.handleCreateClick}>
          Создать заказ
        </button>
        <button disabled={isDisabled} onClick={this.handleMoveOrderToFarm}>
          Отправить заказ на ферму
        </button>
        {/* <Order orders={orders} /> */}
      </div>
    );
  }
}

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
  countPriceToBudget,
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
