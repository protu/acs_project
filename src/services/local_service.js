import axios from 'axios';

const srvreq = axios.create({baseURL: 'http://localhost:3002/customers'});

export const getCustomers = async ()  => {
    let data = await srvreq.get('/').then(({data}) => data);
    return data.data;
}

export const getCustomer = async (id) => {
    let data = await srvreq.get('/' + {id}).then(({data}) => data);
    return data;
}

export const delCustomer = async (id) => {
    let request = await srvreq.delete('/' + {id})
    console.log(request);
}

export default srvreq;