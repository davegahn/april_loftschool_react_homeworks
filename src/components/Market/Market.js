import React, { Component } from 'react';
import './Market.css';
import Order from 'components/Order';
import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from 'actions/marketActions';

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

  handleCreateClick = () => {
    this.setState({ isDisabled: false });
    this.props.createOrder(getNewOrder());
  };

  handleMoveOrderToFarm = () => {
    const { moveOrderToFarm, orders } = this.props;
    const lastOrder = orders[orders.length - 1];
    moveOrderToFarm(lastOrder);
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
        <div className="order-list">
          {orders.map((order, idx) => <Order key={order.id} {...order} />)}
        </div>
      </div>
    );
  }
}

/**
 *
 * Передаем состояние в props компоненты
 */
const mapStateToProps = state => ({ ...state.market });

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
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
