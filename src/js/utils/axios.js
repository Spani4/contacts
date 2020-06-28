import axios from 'axios';

import store from '~/store';

const API_KEY = 'AIzaSyAQyFm0xDYZrPL45nyffNi3jCqwtOBRqLc';


export const auth = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
})

auth.interceptors.request.use(config => {

    console.log(config);
    config.data = { ...config.data, returnSecureToken: true};
    config.url = new URL(config.baseURL + config.url);
    config.url.searchParams.set('key', API_KEY);

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



export const db = axios.create({
    baseURL: `https://contacts-65dbf.firebaseio.com`,
})

db.interceptors.request.use(config => {

    console.log(config);

    const userId = store.state.user.id;
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    
    config.baseURL += `/${userId}`;
    config.url = new URL(config.baseURL + config.url);
    config.url.searchParams.set('auth', jwt.token);

    store.dispatch('startLoading');

    return config;

})