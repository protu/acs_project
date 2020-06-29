import { GET_BILLS, ADD_BILL, DEL_BILL, CURR_BILL } from '../actions/types';

const INITIAL_STATE = {
    bills: [],
    current: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BILLS:
            return { ...state, bills: action.payload };
        case ADD_BILL:
            return { ...state }
        case DEL_BILL:
            return { ...state, current: action.payload };
        case CURR_BILL:
            return { ...state, current: action.payload };
        default:
            return state;
    }
}
