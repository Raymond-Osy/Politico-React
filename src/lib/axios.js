import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://politicom.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setAxiosHeader = token => { Axios.defaults.headers.common.Authorization = token; };

export default Axios;
