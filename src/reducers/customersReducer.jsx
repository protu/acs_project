import { GET_CUSTOMERS, ADD_CUSTOMER } from '../actions/types';

const INITIAL_STATE = {
    customers: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            return { ...state, customers: action.payload };
        case ADD_CUSTOMER:
            return state;
        default:
            return state;
    }
}