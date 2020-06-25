import customersData from "./data_repository";
// import servicecreate from "./servicecreate";

export function getCustomers() {
    // const response = await servicecreate.get();
    return customersData;
    // console.log(response.data.results);
    // return response.data.results;
}

export function getCustomer(id) {
    const customer = customersData.filter(customer => customer.Id === Number(id)).shift();
    return customer;
}

export function delCustomer(id) {
    return customersData.filter(customer => customer.Id !== Number(id));
}