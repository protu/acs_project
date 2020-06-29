import axios from 'axios';

const srvreq = axios.create({ baseURL: 'http://www.fulek.com/nks/api/aw' });

// Customer functions

export function getCustomersService() {
    return srvreq.get('/last200customers');
}

export function getCustomerService(id) {
    return srvreq.get('/customer/' + id);
}

export async function delCustomerService(customer, token) {
    srvreq.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await srvreq.post('/deletecustomer', customer)
}

export async function addCustomerService(customer, token) {
    srvreq.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await srvreq.post('/addcustomer', customer);
}

export async function editCustomerService(customer, token) {
    srvreq.defaults.headers.common = {'Authorization': `Bearer ${token}`}
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

// Bill functions

export function getBillsService() {
    return srvreq.get('/last200customers');
}

export function getBillService(id) {
    return srvreq.get('/customer/' + id);
}

export async function delBillService(customer, token) {
    srvreq.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await srvreq.post('/deletecustomer', customer)
}

export async function addBillService(customer, token) {
    srvreq.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await srvreq.post('/addcustomer', customer);
}

export async function editBillService(customer, token) {
    srvreq.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await srvreq.post('/editcustomer', customer);
}

// BillItems functions

export function getItemsService() {
    return srvreq.get('/last200customers');
}

export function getItemService(id) {
    return srvreq.get('/customer/' + id);
}

export async function delItemService(customer, token) {
    srvreq.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await srvreq.post('/deletecustomer', customer)
}

export async function addItemService(customer, token) {
    srvreq.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await srvreq.post('/addcustomer', customer);
}

export async function editItemService(customer, token) {
    srvreq.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await srvreq.post('/editcustomer', customer);
}

export default srvreq;
