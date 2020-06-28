import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import contacts from './contacts';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        auth,
        contacts
    },

    state: {
        loading: false,
        user: null
    },

    actions: {
        startLoading({ commit }) {
            commit('SET_LOADING', true);
        },
        stopLoading({ commit }) {
            commit('SET_LOADING', false);
        },
    },

    mutations: {
        SET_LOADING(state, loading) {
            state.loading = loading;
        },

        SET_USER(state, user) {
            state.user = user;
        }
    }
})
