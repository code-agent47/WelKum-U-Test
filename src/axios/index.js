import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.welkom-u.ca/WelkomU_Test/api/',
    headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("userEmail")}`
    },
});

instance.interceptors.request.use(
    async config => {
      config.headers = { 
        'Authorization': `Bearer ${sessionStorage.getItem("userEmail")}`,
      }
      return config;
    },
    error => {
      Promise.reject(error)
  });

export default instance;