import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

// export const moveOrderToCustomer = (profit, marketExpanse, farmExpance, deliveryExpanse) => ({
//   type: MOVE_ORDER_TO_CUSTOMER,
//   payload: {
//     profit: 0,
//     marketExpanse: 0,
//     farmExpance: 0,
//     deliveryExpanse: 0
//   }
// });



export const moveOrderToCustomer = (payload) => ({
  type: MOVE_ORDER_TO_CUSTOMER,
  payload
});
