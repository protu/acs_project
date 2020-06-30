import { getItemsService, addItemService, delItemService} from '../services/aw_service';
import { GET_ITEMS, ADD_ITEM, DEL_ITEM, FILTER_ITEM, CURR_ITEM } from './types';

export const getItems = (billId) => async dispatch => {
  const response = await getItemsService(billId);
  dispatch({
    type: GET_ITEMS,
    payload: response.data
  })
}

export const addItem = (bill, token) => async dispatch => {
  const response = await addItemService(bill, token);
  dispatch({
    type: ADD_ITEM,
    payload: response.data
  })
}

export const delItem = (bill, token) => async dispatch => {
  const response = await delItemService(bill, token);
  dispatch({
    type: DEL_ITEM,
    payload: bill
  })
}

export const currItem = bill => {
  return ({
    type: CURR_ITEM,
    payload: bill
  })
}

export const filterItem = filter => {
  return({
    type: FILTER_ITEM,
    filter: filter
  })
}

