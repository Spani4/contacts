import "~/scss/index.scss";

import Vue from 'vue'
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router'

import store from '~/store';
import App from '~/vue/App.vue';


import AuthPage from '~/vue/views/AuthPage.vue'

Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})

const routes = [
    { path: '/auth', component: AuthPage },
    { path: '/', component: AuthPage },
    // {
    //     path: '/dashboard',
    //     component: DashboardPage,
    //     beforeEnter(to, from, next) {
    //         if ( store.state.idToken ) {
    //             next();
    //         } else {
    //             next('/signin');
    //         }
    //     }
    // }
]



const router =  new VueRouter({ mode: 'history', routes });

const el = document.getElementById('app');

new Vue({

    name: 'Contacts',
    el,
    store,
    router,

    render: h => h(App),
})
