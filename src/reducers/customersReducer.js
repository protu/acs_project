import { GET_CUSTOMERS, ADD_CUSTOMER, DEL_CUSTOMER, EDIT_CUSTOMER, CURR_CUSTOMER } from '../actions/types';

const INITIAL_STATE = {
    customers: [],
    current: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return { ...state, customers: action.payload };
        case ADD_CUSTOMER:
            return state;
        case DEL_CUSTOMER:
            return { ...state, current: action.payload };
        case EDIT_CUSTOMER:
            return { ...state, current: action.payload };
        case CURR_CUSTOMER:
            return { ...state, current: action.payload };
        default:
            return state;
    }
}