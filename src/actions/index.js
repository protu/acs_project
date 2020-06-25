// import streams from '../apis/streams'
import servicecreate from '../services/servicecreate';

import {
  SIGN_IN,
  SIGN_OUT,
  GET_CUSTOMERS
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const getCustomers = async dispatch => {
  const response = await servicecreate.get('/')
  dispatch({
    type: GET_CUSTOMERS,
    payload: response.data
  })
}

// export const createStream = formValues => async dispatch => {
//   const response = await streams.post('/streams', formValues);

//   dispatch({ type: CREATE_STREAM, payload: response.data })
// }
