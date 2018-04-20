import React, { Component } from 'react';
import './Market.css';

import Order from 'components/Order';

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


export class Market extends Component {

  state = {
    // orders: [{ name: '' }],
    orders: [],
    isDisabled: true,
    name: ''
  }

  handleClick = () => {
    this.setState({ orders: this.state.orders.concat([{ order: getNewOrder() }]) })
    this.setState({ isDisabled: false });
  }

  render() {
    console.log(this.state);

    const { isDisabled, orders } = this.state;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button className="new-orders__create-button"
          onClick={this.handleClick}
        >
          Создать заказ
        </button>
        <button disabled={isDisabled}
          onClick={this.send}
        >Отправить заказ на ферму
        </button>
        <Order orders={orders} name={orders.order.name} price={orders.orderprice} createdAt={orders.ordercreatedAt} />
      </div>
    );
  }
}

export default Market;
