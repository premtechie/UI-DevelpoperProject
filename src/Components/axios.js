import axios from 'axios';
const request = axios.create({
    baseURL:'http://dksinha.website/',
    headers: {'X-API-KEY': 'ds89fdfvcb87gf8dfdg87fdghgjh897',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'  },
    auth:{
        'username':'admin',
        'password':'1234'
    }
})

export default request;