import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes'; // импортируем типы экшенов в виде констант


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


