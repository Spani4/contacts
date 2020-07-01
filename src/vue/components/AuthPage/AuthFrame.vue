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
        component(
            :is="action"
            @authError="authError = $event"
            @mounted="authError = false"
        )
            template(v-slot:autherror)
                .text-danger.py-2(v-if="authError") {{ translatedAuthError }}

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
            authError: false,
        }
    },

    computed: {
        translatedAuthError() {

            switch ( this.authError ) {
                case 'EMAIL_EXISTS': return 'The email address is already in use.'
                case 'TOO_MANY_ATTEMPTS_TRY_LATER': return 'We have blocked all requests from this device due to unusual activity. Try again later.'
                case 'EMAIL_NOT_FOUND': return 'There is no user record corresponding to this identifier.'
                case 'INVALID_PASSWORD': return 'The password is invalid.'
                case 'USER_DISABLED': return 'The user account has been disabled by an administrator.'
                default: return 'Authorization error';
            }
        }
    },    
}
</script>