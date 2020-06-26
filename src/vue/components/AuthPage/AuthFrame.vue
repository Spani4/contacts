<template lang="pug">
                    
.auth-frame.p-3.shadow.rounded-sm

    .auth-frame__tabs.nav.nav-tabs.nav-justified
        .nav-item.w-50
            a.nav-link.w-100.text-center(
                href="#"
                :class="{ active: action == 'sign-in' }"
                @click.prevent="action = 'sign-in'"
            ) Sign In
        .nav-item.w-50
            a.nav-link.w-100.text-center(
                href="#"
                :class="{ active: action == 'sign-up' }"
                @click.prevent="action = 'sign-up'"
            ) Sign Up

    .auth-frame__content.border-top-0.bg-white.border.p-3
        keep-alive
            component(:is="action")
</template>


<script>
import { mapActions } from 'vuex';

import SignIn from "~/vue/components/AuthPage/SignIn.vue";
import SignUp from "~/vue/components/AuthPage/SignUp.vue";


export default {
    name: "AuthFrame",
    components: {
        SignIn,
        SignUp
    },

    data() {
        return {
            action: 'sign-in',
        }
    },

    methods: {
        ...mapActions(['startLoading', 'stopLoading'])
    },

    mounted() {
        this.stopLoading();
    }
}
</script>