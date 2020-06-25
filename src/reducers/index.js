import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import customersReducer from './customersReducer';

export default combineReducers({
  auth: authReducer,
  customers: customersReducer,
  form: formReducer
});
