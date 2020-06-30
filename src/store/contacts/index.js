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
                
                if ( !response.data ) return;
                
                for ( let key in response.data ) {
                    response.data[key].id = key;
                }
                
                const contacts = Object.values(response.data);
                commit('SET_CONTACTS', contacts);
            } catch (err) {
                console.dir(err);
            }
        },

        async addContact({ commit, dispatch }, contact) {

            try {
                const response = await axios.db.post(`/contacts.json`, contact);
                contact.id = response.data.name;
                commit('PUSH_CONTACT', contact);
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
        },

        PUSH_CONTACT(state, contact) {
            state.contacts.push(contact);
        }
    },

    getters: {}
}