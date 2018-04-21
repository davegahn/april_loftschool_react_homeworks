import { MOVE_ORDER_TO_FARM } from 'actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';

export default (state = [], action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return [...state, action.payload];
    case MOVE_ORDER_TO_CUSTOMER:
      return [];
    default:
      return state;
  }
};
