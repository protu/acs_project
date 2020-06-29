import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  username: null,
  token: null,
  message: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
      if (action.payload.token) {
        return {...state, isSignedIn: true, ...action.payload}
      }
      return {...state, isSignedIn: false, username: null, token: null, message: action.payload.message};;
    case SIGN_OUT:
      return{...state, isSignedIn: false, username: null, token: null};
    default:
      return state;
  }
};
