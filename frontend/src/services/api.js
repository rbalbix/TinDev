import axios from 'axios';

// production
// baseURL: 'https://rb-tindev.herokuapp.com/'

// Dev
// baseURL: 'http://localhost:3333'

const api = axios.create({
  baseURL: 'https://rb-tindev.herokuapp.com/',
});

export default api;
