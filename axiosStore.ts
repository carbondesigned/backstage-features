import axios from 'axios';

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
instance.interceptors.request.use((config) => {
  config.params = {
    // add your default ones
    // api_key: process.env.NEXT_PUBLIC_API_KEY,
    // spread the request's params
    ...config.params,
  };
  return config;
});
export default instance;
