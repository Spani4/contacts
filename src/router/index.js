import Vue from 'vue'
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';

import AuthPage from '~/vue/views/AuthPage.vue'
import ContactsPage from '~/vue/views/ContactsPage.vue'

import store from '~/store';

Vue.use(VueRouter);

const routes = [
    { path: '/auth', component: AuthPage },
    {
        path: '/',
        component: ContactsPage,
        beforeEnter(to, from, next) {
            if ( store.state.user ) {
                next();
            } else {
                next('/auth');
            }
        }
    }
]


export default new VueRouter({ mode: 'history', routes });