import { GET_BILLS, ADD_BILL, DEL_BILL, EDIT_BILL, CURR_BILL, FILTER_BILL } from '../actions/types';

const INITIAL_STATE = {
    bills: [],
    current: {},
    filter: {search: ""}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BILLS:
            return { ...state, customers: action.payload };
        case ADD_BILL:
            return {...state}
        case DEL_BILL:
            return { ...state, current: action.payload };
        case EDIT_BILL:
            return { ...state, current: action.payload };
        case CURR_BILL:
            return { ...state, current: action.payload };
        case FILTER_BILL:
            return {...state, filter: action.filter};
        default:
            return state;
    }
}
