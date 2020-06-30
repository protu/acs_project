import { NAV_CUSTOMER, NAV_MAIN, NAV_BILL } from './types';

export const navCustomer = () => {
    return {
        type: NAV_CUSTOMER
    }
}

export const navMain = () => {
    return {
        type: NAV_MAIN
    }
}

export const navBill = () => {
    return {
        type: NAV_BILL
    }
}