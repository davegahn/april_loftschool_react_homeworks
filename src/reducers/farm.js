import { MOVE_ORDER_TO_FARM } from 'actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';

export default (state = { orders: [], profit: 0, productionPrice: 0 }, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { orders: [...state, action.payload] };
    case MOVE_ORDER_TO_CUSTOMER:
      return [...state, action.payload]
    default:
      return state;
  }
};
