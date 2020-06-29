import { getCustomersService, getCustomerService, addCustomerService, delCustomerService, editCustomerService } from '../services/aw_service';
import { GET_CUSTOMERS, GET_CUSTOMER, ADD_CUSTOMER, DEL_CUSTOMER, CURR_CUSTOMER, EDIT_CUSTOMER, FILTER_CUSTOMER } from './types';

export const getCustomers = () => async dispatch => {
  const response = await getCustomersService();
  dispatch({
    type: GET_CUSTOMERS,
    payload: response.data
  })
}

export const getCustomer = (id) => async dispatch => {
  const response = await getCustomerService(id);
  dispatch({
    type: GET_CUSTOMER,
    payload: response.data
  })
}

export const addCustomer = (customer, token) => async dispatch => {
  const response = await addCustomerService(customer, token);
  dispatch({
    type: ADD_CUSTOMER,
    payload: response.data
  })
}

export const delCustomer = (customer, token) => async dispatch => {
  const response = await delCustomerService(customer, token);
  dispatch({
    type: DEL_CUSTOMER,
    payload: customer
  })
}

export const editCustomer = (customer, token) => async dispatch => {
  const response = await editCustomerService(customer, token);
  dispatch({
    type: EDIT_CUSTOMER,
    payload: customer
  })
}

export const currCustomer = customer => dispatch => {
  dispatch ({
    type: CURR_CUSTOMER,
    payload: customer
  })
}

export const filterCustomer = filter => {
  return ({
    type: FILTER_CUSTOMER,
    filter: filter
  })
}
