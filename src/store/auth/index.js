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

                // await dispatch('postUser', user);

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

        // async postUser(context, user) {
        //     const initialData = { ...user, contacts: []}
        //     axios.db.post(`/users.json/${user.id}`, initialData)
        // }
    },

    mutations: {},

    getters: {}
}