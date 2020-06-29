import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import customersReducer from './customersReducer';
import navReducer from './navReducer';
import billReducer from './billReduceer';
import itemReducer from './itemsReducer';

export default combineReducers({
  auth: authReducer,
  customers: customersReducer,
  form: formReducer,
  nav: navReducer,
  bill: billReducer,
  item: itemReducer
});
