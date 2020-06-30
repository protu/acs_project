import { GET_ITEMS, ADD_ITEM, DEL_ITEM, EDIT_ITEM, CURR_ITEM, FILTER_ITEM } from '../actions/types';

const INITIAL_STATE = {
    items: [],
    current: {},
    filter: {search: ""}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, items: action.payload };
        case ADD_ITEM:
            return {...state}
        case DEL_ITEM:
            return { ...state, current: action.payload };
        case EDIT_ITEM:
            return { ...state, current: action.payload };
        case CURR_ITEM:
            return { ...state, current: action.payload };
        case FILTER_ITEM:
            return {...state, filter: action.filter};
        default:
            return state;
    }
}
