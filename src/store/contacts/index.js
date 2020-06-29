import * as axios from '~/js/utils/axios/index';


export default {

    namespaced: true,

    state: {},

    actions: {

        async addContact({ rootState, dispatch }, contact) {

            const userId = rootState.user.id;

            try {
                const response = await axios.db.post(`.json`, contact);
                console.log(response);
            } catch(err) {
                console.dir(err)
            } finally {
                dispatch('stopLoading', null, { root: true })
            }
        }
    },

    mutations: {},

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
