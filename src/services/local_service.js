import axios from 'axios';

const srvreq = axios.create({baseURL: 'http://localhost:3002/customers'});

export function getCustomersService()  {
    return srvreq.get('');
}

export function getCustomerService(id) {
    return  srvreq.get('/' + id);
}

export async function delCustomerService(id) {
    return await srvreq.delete('/' + id)
}

export async function addCustomerService(customer) {
    return await srvreq.post('', customer);
}

export default srvreq;