/**
 * Создаем reducer
 */
import { CREATE_ORDER, COUNT_PRICE_TO_BUDGET } from 'actions/marketTypes';

export default (state = { orders: [] }, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { orders: [...state.orders, action.payload] };
    case COUNT_PRICE_TO_BUDGET: {
      return { orders: [...state.orders, action.payload] };
    }
    default:
      return state;
  }
};
