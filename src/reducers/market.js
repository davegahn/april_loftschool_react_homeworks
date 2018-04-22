/**
 * Создаем reducer
 */
import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM,
} from 'actions/marketTypes';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      // return { ...state, orders: [...state.orders, action.payload] }
      return [...state, action.payload];
    case MOVE_ORDER_TO_FARM:
      return [...state, action.payload];
    default:
      return state;
  }
};
