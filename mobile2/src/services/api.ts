import axios from 'axios';
import baseUrl from './dynamicUrl'

const api = axios.create({
  baseURL: `http://${baseUrl.baseUrl}:3333`
});

export default api;