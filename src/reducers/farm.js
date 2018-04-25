import { MOVE_ORDER_TO_FARM } from 'actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { orders: [...state.orders, action.payload] };
    case MOVE_ORDER_TO_CUSTOMER:
      return { orders: [...state.orders] };
    default:
      return state;
  }
};
