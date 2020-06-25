import "~/scss/index.scss";

import Vue from 'vue'

import store from '~/store';
import router from '~/router';
import App from '~/vue/App.vue';


const el = document.getElementById('app');

new Vue({

    name: 'Contacts',
    el,
    store,
    router,

    render: h => h(App),
})
