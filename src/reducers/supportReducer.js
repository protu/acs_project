import { GET_CITIES, GET_SELLERS} from '../actions/types';

const INITIAL_STATE = {
    cities: [],
    sellers: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CITIES:
            return { ...state, cities: action.payload };
        case GET_SELLERS:
            return { ...state, sellers: action.payload };
        default:
            return state;
    }
}
