import {GET_CUSTOMERS} from '../actions/types';

const INITIAL_STATE = {
    customers: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_CUSTOMERS:
            return{...state, customers: action.payload}
        default:
            return state;
    }
}