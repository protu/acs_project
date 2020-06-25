import srvreq from '../services/local_service';
import { GET_CUSTOMERS, ADD_CUSTOMER} from './types';

export const getCustomers = async dispatch => {
  const response = await srvreq.get('');
  dispatch({
    type: GET_CUSTOMERS,
    payload: response.data
  })
}

export const addCustomer = formValues => async dispatch => {
  const response = await srvreq.post('', formValues);
  dispatch({ 
    type: ADD_CUSTOMER,
    payload: response.data 
  })
}

