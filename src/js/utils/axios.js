import axios from 'axios';

export const axiosAuth = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
})