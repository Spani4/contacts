import * as axios from '~/js/utils/axios/index';
import router from '~/router';



export default {

    namespaced: true,
    
    state: {},

    actions: {

        async signUp({ dispatch }, data) {

            try {
                const response = await axios.auth.post('/accounts:signUp', data);
                const user = {
                    id: response.data.localId,
                    email: response.data.email,
                }

                await dispatch('storeUserInDatabase', { ...user, contacts: [] });
                router.replace('/');
            } catch(err) {   
                if (err.response && err.response.data) throw err.response.data.error.message;
                else console.dir(err);
            } finally {
                dispatch('stopLoading', null, {root: true})
            }
        },

        async signIn({ dispatch }, data) {

            try {
                await axios.auth.post('/accounts:signInWithPassword', data);
                await dispatch('contacts/fetchContacts', null, { root: true });
                router.replace('/');
            } catch (err) {
                if (err.response && err.response.data) throw err.response.data.error.message;
                else console.dir(err);
            } finally {
                dispatch('stopLoading', null, { root: true })
            }
        },

        async autoLogin({ dispatch, commit }) {
            
            try {
                const user = JSON.parse(localStorage.getItem('jwt')).user;
                commit('SET_USER', user, { root: true });
                await dispatch('contacts/fetchContacts', null, { root: true });
            } catch(err) {
                console.warn('Autologin failed');
                router.replace('/auth');
            } finally {
                dispatch('stopLoading', null, { root: true })
            }
        },

        logout({ commit }) {
            commit('SET_USER', null, { root: true });
            commit('contacts/SET_CONTACTS', [], { root: true });
            localStorage.removeItem('jwt');
            router.replace('/auth');
        },

        async storeUserInDatabase(context, initialUser) {

            try {
                await axios.db.put(`.json`, initialUser)
            } catch(err) {
                console.dir(err);
            }
        }
    },

    mutations: {},

    getters: {}
}