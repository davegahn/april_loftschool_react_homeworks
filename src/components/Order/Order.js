import React from 'react';
import './Order.css';

const Order = props => {
  const { name, price, createdAt } = props;
  return (
    <div className="order">
      <div className="order_upper">
        <p className="p--order">Название: {name}</p>
        <p className="p--order">
          Цена: <span className="order-price">{price}</span>
        </p>
      </div>
      <div className="order_lower">
        <p className="p--order">Создан: {createdAt.toDateString()}</p>
      </div>
    </div>
  );
};

export default Order;
