import customersData from "./data_repository";

export function getCustomers() {
    return customersData;
}

export function getCustomer(id) {
    const customer = customersData.filter(customer => customer.Id === Number(id)).shift();
    return customer;
}

export function delCustomer(id) {
    return customersData.filter(customer => customer.Id !== Number(id));
}