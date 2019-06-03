import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://politicom.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setAxiosHeader = token => { Axios.defaults.headers.common['x-access-token'] = token; };

export default Axios;
