<template lang="pug">
    .sign-up
        form
            .form-group        
                label.d-block E-mail
                    input.form-control(
                        type="email"
                        v-focus
                        v-model.trim="$v.email.$model"
                    )
                .text-danger(v-if="showErrors")
                    small.d-block(
                        v-if="!$v.email.email"
                    ) Email is invalid
                    small.d-block(
                        v-if="!$v.email.required"
                    ) Email is required
                    small.d-block(
                        v-if="!$v.email.max"
                    ) Email is too long. You gotta be kidding.

            .form-group                    
                label.d-block Password
                    input.form-control(
                        type="password"
                        v-model="$v.password.$model"
                    )
                .text-danger(v-if="showErrors")
                    small.d-block(
                        v-if="!$v.password.max"
                    ) Password is too long. You gotta be kidding.
                    small.d-block(
                        v-if="!$v.password.required"
                    ) Password is required

            .form-group                    
                label.d-block Confirm password
                    input.form-control(
                        type="password"
                        v-model="$v.passwordConfirm.$model"
                    )
                .text-danger(v-if="showErrors")
                    small.d-block(
                        v-if="!$v.passwordConfirm.sameAsPassword"
                    ) Passwords does not match.                 

            .text-right
                button.btn.btn-primary(
                    type="button"
                    @click="submit()"
                ) Sign Up
</template>


<script>
import { mapActions } from 'vuex';

import validations from '~/js/utils/validations';

export default {
    name: "SignUp",

    data() {
        return {
            email: '',
            password: '',
            passwordConfirm: '',
            showErrors: false,
        }
    },

    methods: {
        ...mapActions('auth', ['signUp']),

        submit() {
            console.log(this.$v.$invalid)
            console.log(this.$v.passwordConfirm)
            this.$v.email.$touch();
            this.showErrors = true;

            if ( this.$v.$invalid ) {
                this.showErrors = true;
            } else {
                console.log('submit')
                this.signUp();
            }
        }
    },

    validations: {
        email: validations.email,
        password: validations.password,
        passwordConfirm: validations.passwordConfirm,
    }
}
</script>

<style lang="scss">

</style>