
import { SIGN_IN, SIGN_OUT, } from './types';
import { login } from '../services/aw_service';

export const signIn = (user) => async dispatch => {
  const response = await login(user);
  dispatch({
    type: SIGN_IN,
    payload: response.data
  })
};

export const signOut = () => {
  console.log("Sign out action");
  return {
    type: SIGN_OUT
  }
}

