import axios from 'axios';

export default axios.create({
    baseURL: 'http://webservices.nextbus.com/service/publicJSONFeed'
})