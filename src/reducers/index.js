import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import customersReducer from './customersReducer';
import navReducer from './navReducer';

export default combineReducers({
  auth: authReducer,
  customers: customersReducer,
  form: formReducer,
  nav: navReducer
});
