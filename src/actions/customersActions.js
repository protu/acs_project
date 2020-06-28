import { getCustomersService, addCustomerService, delCustomerService, editCustomerService } from '../services/local_service';
import { GET_CUSTOMERS, ADD_CUSTOMER, DEL_CUSTOMER, CURR_CUSTOMER, EDIT_CUSTOMER, FILTER_CUSTOMER } from './types';

export const getCustomers = () => async dispatch => {
  const response = await getCustomersService();
  dispatch({
    type: GET_CUSTOMERS,
    payload: response.data
  })
}

export const addCustomer = formValues => async dispatch => {
  const response = await addCustomerService(formValues);
  dispatch({
    type: ADD_CUSTOMER,
    payload: response.data
  })
}

export const delCustomer = customer => async dispatch => {
  const response = await delCustomerService(customer.id);
  dispatch({
    type: DEL_CUSTOMER,
    payload: customer
  })
}

export const editCustomer = customer => async dispatch => {
  const response = await editCustomerService(customer);
  dispatch({
    type: EDIT_CUSTOMER,
    payload: customer
  })
}

export const currCustomer = customer => {
  return ({
    type: CURR_CUSTOMER,
    payload: customer
  })
}

export const filterCustomer = search => {
  return({
    type: FILTER_CUSTOMER,
    filter: search
  })
}
