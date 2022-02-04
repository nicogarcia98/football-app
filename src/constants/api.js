import axios from "axios";


export const httpInstance = axios.create({
  baseURL: 'http://localhost:3002/',
  headers: {
    'Accept': 'application/json'
  },
});

export default httpInstance;