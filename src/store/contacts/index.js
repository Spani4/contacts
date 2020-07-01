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
        },

        async updateContact({ commit, dispatch }, contact) {

            try {
                const updatedContact = { ...contact, id: undefined };

                await axios.db.put(`/contacts/${contact.id}.json`, updatedContact);
                commit('UPDATE_CONTACT', contact);
            } catch (err) {
                console.dir(err);
            } finally {
                dispatch('stopLoading', null, { root: true });
            }
        },

        async removeContact({commit, dispatch}, contact) {

            try {
                const response = await axios.db.delete(`/contacts/${contact.id}.json`, contact);
                commit('REMOVE_CONTACT', contact);
            } catch (err) {
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
        },
        
        REMOVE_CONTACT(state, contact) {
            state.contacts = state.contacts.filter( item => item.id !== contact.id );
        },

        UPDATE_CONTACT(state, contact) {

            const contactToUpdate = state.contacts.find(item => item.id === contact.id );

            for ( let key in contact ) {
                contactToUpdate[key] = contact[key];
            }
        },
        
    },

    getters: {}
}