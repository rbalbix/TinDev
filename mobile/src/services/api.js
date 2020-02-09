import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omni8-api.herokuapp.com'
});

export default api;