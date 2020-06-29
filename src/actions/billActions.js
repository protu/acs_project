import { getBillsService, addBillService, delBillService } from '../services/aw_service';
import { GET_BILLS, ADD_BILL, DEL_BILL, EDIT_BILL, FILTER_BILL, CURR_BILL } from './types';

export const getBills = (customer) => async dispatch => {
  const response = await getBillsService(customer);
  dispatch({
    type: GET_BILLS,
    payload: response.data
  })
}

export const addBill = (customer, token) => async dispatch => {
  const response = await addBillService(customer, token);
  dispatch({
    type: ADD_BILL,
    payload: response.data
  })
}

export const delBill = (customer, token) => async dispatch => {
  const response = await delBillService(customer, token);
  dispatch({
    type: DEL_BILL,
    payload: customer
  })
}

export const currBill = customer => {
  return ({
    type: CURR_BILL,
    payload: customer
  })
}

export const filterBill = filter => {
  return({
    type: FILTER_BILL,
    filter: filter
  })
}

