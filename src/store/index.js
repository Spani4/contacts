import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        auth,
    },

    state: {
        loading: true,
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
        }
    }
})
