<template lang="pug">
    .sign-in
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
                    small.d-block(
                        v-if="!$v.password.min"
                    ) It's too short (That's what she said)

            slot(name="autherror")

            .text-right
                button.btn.btn-primary(
                    type="button"
                    @click="submit"
                ) Sign In
</template>


<script>
import { mapActions } from 'vuex';

import validations from '~/js/utils/validations';

export default {
    name: "SignIn",

    data() {
        return {
            email: '',
            password: '',
            showErrors: false,
        }
    },

    methods: {
        ...mapActions('auth', ['signIn']),

        submit() {

            if ( this.$v.$invalid ) {
                this.showErrors = true;
                return
            }

            const data = {
                email: this.email,
                password: this.password
            }

            this.signIn(data).catch(err => {
                this.$emit('authError', err)
            });;
        }
    },

    validations: {
        email: validations.email,
        password: validations.password,
    },

    mounted() {
        this.$emit('mounted');
    }
}
</script>
