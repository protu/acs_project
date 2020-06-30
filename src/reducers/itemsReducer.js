import { GET_ITEMS, ADD_ITEM, DEL_ITEM, CURR_ITEM, ITEM_CATEGORY, ITEM_SUBCATEGORY, ITEM_PRODUCT } from '../actions/types';

const INITIAL_STATE = {
    items: [],
    current: {},
    categories: [],
    subcategories: [],
    products: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, items: action.payload };
        case ADD_ITEM:
            return { ...state }
        case DEL_ITEM:
            return { ...state, current: action.payload };
        case CURR_ITEM:
            return { ...state, current: action.payload };
        case ITEM_CATEGORY:
            return { ...state, categories: action.payload };
        case ITEM_SUBCATEGORY:
            return { ...state, subcategories: action.payload };
        case ITEM_PRODUCT:
            return { ...state, products: action.payload };
        default:
            return state;
    }
}
