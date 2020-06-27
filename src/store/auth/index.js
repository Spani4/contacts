import { axiosAuth } from '~/js/utils/axios';


export default {

    namespaced: true,
    
    state: {},

    actions: {
        async signUp({ rootState, rootCommit }, data) {

            try {
                const response = await axiosAuth.post(`/accounts:signUp?key=${rootState.apiKey}`)
                console.log(response)
            } catch(err) {
                console.log(err)
            }
        }
    },

    mutations: {},

    getters: {}
}