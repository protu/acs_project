import axios from 'axios';

const srvreq = axios.create({baseURL: 'http://www.fulek.com/nks/api/aw'});

// Customer functions

export function getCustomersService()  {
    return srvreq.get('/last200customers');
}

export function getCustomerService(id) {
    return  srvreq.get('/customer/' + id);
}

export async function delCustomerService(customer) {
    return await srvreq.post('/deletecustomer', customer)
}

export async function addCustomerService(customer) {
    return await srvreq.post('/addcustomer', customer);
}

export async function editCustomerService(customer) {
    return await srvreq.post('/editcustomer', customer);
}

// User functions

export async function login(user) {
    return await srvreq.post('/login', user);
}

export async function getUser(user) {
    return await srvreq.post('/getUser', user);
}

export async function editUser(user) {
    return await srvreq.post('/editUser', user);
}

export async function registerUser(user) {
    return await srvreq.post('/registeruser', user);
}

export default srvreq;