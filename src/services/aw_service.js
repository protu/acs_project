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
    srvreq.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    return await srvreq.post('/deletecustomer', customer)
}

export async function addCustomerService(customer, token) {
    srvreq.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    return await srvreq.post('/addcustomer', customer);
}

export async function editCustomerService(customer, token) {
    srvreq.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
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

export function getBillsService(customerId) {
    return srvreq.get('/customerbills/' + customerId);
}

export async function delBillService(bill, token) {
    srvreq.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    return await srvreq.post('/deleteBill', bill)
}

export async function addBillService(bill, token) {
    srvreq.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    return await srvreq.post('/addbill', bill);
}

// Bill's Items functions

export function getItemsService(billId) {
    return srvreq.get('/billitems/' + billId);
}

export async function delItemService(bill, token) {
    srvreq.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    return await srvreq.post('/deleteitem', { id: bill.Id })
}

export async function addItemService(item, token) {
    srvreq.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    return await srvreq.post('/additem', item);
}

export function getCategoriesService() {
    return srvreq.get('/categories');
}

export function getSubcategoriesService(categoryId) {
    return srvreq.get('/subcategories/' + categoryId);
}

export function getProductsService(subCategoryId) {
    return srvreq.get('/products/' + subCategoryId);
}


// Other

export function getCitiesService() {
    return srvreq.get('/cities');
}

export function getSellersService() {
    return srvreq.get('/sellers');
}

export default srvreq;
