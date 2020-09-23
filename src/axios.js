import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'https://instagram-clone-backend1.herokuapp.com',
});

export default instance;
