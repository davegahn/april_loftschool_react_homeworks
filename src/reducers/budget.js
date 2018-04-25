import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';

export default (state = [], action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return [...state, action.payload];
    default:
      return state;
  }
};


 //     profit: props.orders.orders, // приходит цена товара при создании заказа
  //     marketExpanse: 0, // отнимается 20 очков за каждый заказ при создании заказа
  //     farmExpance: 0, // отнимается 100 очков за каждый заказ при отправке заказа на ферму
  //     deliveryExpanse: 0 // отнимается 20 очков за каждый заказ при отправке заказа клиенту
