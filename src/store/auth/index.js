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

                await dispatch('postUser', { ...user, contacts: [] });
                
                router.replace('/');
            } catch(err) {
                console.dir(err);
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
                console.log(err)
            } finally {
                dispatch('stopLoading', null, { root: true })
            }
        },

        autoLogin({ commit }) {
            
            try {
                const user = JSON.parse(localStorage.getItem('jwt')).user;
                commit('SET_USER', user, { root: true });
            } catch(err) {
                router.replace('/auth');
            }
        },

        logout({ commit }) {
            commit('SET_USER', null, { root: true });
            commit('contacts/SET_CONTACTS', [], { root: true });
            localStorage.removeItem('jwt');
            router.replace('/auth');
        },

        async postUser(context, initialUser) {

            try {
                await axios.db.post(`.json`, initialUser)
            } catch(err) {
                console.dir(err);
            }
        }
    },

    mutations: {},

    getters: {}
}