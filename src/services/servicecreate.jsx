import axios from 'axios';

export default axios.create({
    // baseURL: 'http://www.fulek.com/nks/api/'
    baseURL: 'http://localhost:3002/users'
})