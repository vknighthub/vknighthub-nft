import axios from 'axios';
import queryString from 'query-string';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosInstance.interceptors.request.use(async (config) => {
    config.params = config.params || {};
    config.headers = config.headers || {};
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosInstance;
