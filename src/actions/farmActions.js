import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export const moveOrderToCustomer = (profit, productionPrice) => ({
  type: MOVE_ORDER_TO_CUSTOMER,
  payload: {
    profit,
    productionPrice
  }
});
