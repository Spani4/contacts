import axios from 'axios';

import store from '~/store';
import * as conf from './config';


const auth = axios.create({
    baseURL: conf.authURL,
})

auth.interceptors.request.use(config => {

    console.log(config);
    config.data = { ...config.data, returnSecureToken: true};
    config.url = new URL(config.baseURL + config.url);
    config.url.searchParams.set('key', conf.API_KEY);

    store.dispatch('startLoading');

    return config;
}, error => {
    throw error;
})

auth.interceptors.response.use(response => {

    const user = {
        id: response.data.localId,
        email: response.data.email,
    }
    
    const jwt = {
        token: response.data.idToken,
        expires: Date.now() + (response.data.expiresIn || 3600) * 1000,
        refreshToken: response.data.refreshToken,
        user,
    }

    localStorage.setItem('jwt', JSON.stringify(jwt));

    store.commit('SET_USER', user);
    
    console.log(response);

    return response;
});


export default auth;