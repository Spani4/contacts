<template lang="pug">
    .sign-in
        form
            .form-group
                label.d-block E-mail
                    input.form-control(
                        type="email"
                        v-model="email"
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
}
</script>

<style lang="scss">

</style>