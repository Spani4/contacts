import * as axios from '~/js/utils/axios/index';


export default {

    namespaced: true,

    state: {
        contacts: [],
    },

    actions: {

        async fetchContacts({ commit, dispatch }) {

            try {
                const response = await axios.db.get(`/contacts.json`);
                console.log(response);

                if (response.data) 
                    commit('SET_CONTACTS', response.data);
            } catch (err) {
                console.dir(err);
            }
        },

        async addContact({ rootState, dispatch }, contact) {

            try {
                const response = await axios.db.post(`/contacts.json`, contact);
            } catch(err) {
                console.dir(err);
            } finally {
                dispatch('stopLoading', null, { root: true });
            }
        }
    },

    mutations: {

        SET_CONTACTS(state, contacts) {
            state.contacts = contacts;
        }
    },

    getters: {}
}


// {
//     /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
//     "rules": {
//         "contacts": {
//             "$uid": {
//                 ".read": "$uid === auth.uid",
//                     ".write": "$uid === auth.uid"
//             }
//         }
//     }
// }
