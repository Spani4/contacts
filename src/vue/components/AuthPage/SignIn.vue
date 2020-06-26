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
            .form-group
                label.d-block Password
                    input.form-control(
                        type="password"
                        v-model="password"
                    )
            .text-right
                button.btn.btn-primary(
                    type="button"
                    @click=""
                ) Sign In
</template>


<script>
import validations from '~/js/utils/validations';

export default {
    name: "SignIn",

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        submit() {

        }
    },

    validations: {
        email: validations.email,
        password: validations.password,
    }
}
</script>

<style lang="scss">

</style>