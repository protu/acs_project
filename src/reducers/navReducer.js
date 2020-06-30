import { NAV_CUSTOMER, NAV_MAIN, NAV_BILL } from '../actions/types';

const INITIAL_STATE = {
    menu: NAV_MAIN
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAV_CUSTOMER:
            return { ...state, menu: action.type };
        case NAV_MAIN:
            return { ...state, menu: action.type };
        case NAV_BILL:
            return { ...state, menu: action.type };
        default:
            return state;
    }
}