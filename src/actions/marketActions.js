import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes'; // импортируем типы экшенов в виде констант


/**
 * Экшен криэйторы
 */
export const createOrder = (id, name, price, createdAt) => ({
  type: CREATE_ORDER,
  payload: {
    id,
    name,
    price,
    createdAt
  }
});


export const moveOrderToFarm = (id, name, price, createdAt) => ({
  type: MOVE_ORDER_TO_FARM,
  payload: {
    id,
    name,
    price,
    createdAt
  }
});


