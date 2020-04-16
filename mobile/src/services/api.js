import axios from 'axios';

// baseURL: 'https://rb-tindev.herokuapp.com/'

// DEV:
// baseURL: 'http://localhost:3333'

const api = axios.create({
  baseURL: 'https://rb-tindev.herokuapp.com/',
});

export default api;
