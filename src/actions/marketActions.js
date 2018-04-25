import { CREATE_ORDER, MOVE_ORDER_TO_FARM, COUNT_PRICE_TO_BUDGET } from './marketTypes'; // импортируем типы экшенов в виде констант


/**
 * Экшен криэйторы
 */
export const createOrder = (payload) => ({
  type: CREATE_ORDER,
  payload
});


export const moveOrderToFarm = (payload) => ({
  type: MOVE_ORDER_TO_FARM,
  payload
});

export const countPriceToBudget = (payload) => ({
  type: COUNT_PRICE_TO_BUDGET,
  payload
});


