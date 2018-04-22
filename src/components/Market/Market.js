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



class Market extends Component {

  state = {
    isDisabled: true
  }

  handleClick = () => {
    this.setState({ isDisabled: false });
  }

  componentWillMount = () => {
    console.log(this.props.children);
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button className="new-orders__create-button"
        // onClick={this.handleClick}
        // onClick={() => this.props.children.createOrder(getNewOrder)}
        // onClick={this.child.createOrder()}
        >
          Создать заказ
        </button>
        <button disabled={isDisabled}
          onClick={this.send}
        >Отправить заказ на ферму
        </button>
        <Order ref={c => (this.child = c)} />
      </div>
    );
  }
}

export default Market;





