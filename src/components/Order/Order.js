import React from 'react';
import './Order.css';

const Order = ({ orders, name, price, createdAt }) => (
  <div className="order-list">
    {orders.map((order, idx) => (
      <div className="order" key={idx}>
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

export default Order;
