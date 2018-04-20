import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';
import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
} from 'actions/marketTypes';

export default (state = [], action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:

      return [...state, action.payload];
    case CREATE_ORDER:

      return [...state, action.payload];
    case MOVE_ORDER_TO_FARM:
      return [];
    default:
      return state;
  }
};
