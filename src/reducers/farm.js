
import { MOVE_ORDER_TO_CUSTOMER } from 'actions/farmTypes';

export default (state = [], action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return [...state, action.payload]
    default:
      return state;
  }
};
