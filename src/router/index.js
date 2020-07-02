import Vue from 'vue'
import VueRouter from 'vue-router';

import AuthPage from '~/vue/views/AuthPage.vue'
import ContactsPage from '~/vue/views/ContactsPage.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: ContactsPage },
    { path: '/auth', component: AuthPage },
]


export default new VueRouter({
    mode: 'history',
    routes
});