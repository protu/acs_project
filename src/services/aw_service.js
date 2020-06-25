import axios from 'axios';

const srvreq = axios.create({baseURL: 'http://www.fulek.com/nks/api/'});

export default srvreq;