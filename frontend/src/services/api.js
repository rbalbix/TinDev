import axios from 'axios';

// production
// baseURL: 'https://omni8-api.herokuapp.com'

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;