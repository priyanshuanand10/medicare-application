import axios from 'axios';

 const baseUrl="http://127.0.0.1:9090";
 export default baseUrl;
export const myAxios = axios.create({baseURL:baseUrl,})