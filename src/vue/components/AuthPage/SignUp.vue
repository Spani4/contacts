<template lang="pug">
    .sign-up
        form
            .form-group        
                label.d-block E-mail
                    input.form-control(
                        type="email"
                        v-focus
                        v-model="email"
                    )
            .form-group                    
                label.d-block Password
                    input.form-control(
                        type="password"
                        v-model="password"
                    )
            .form-group                    
                label.d-block Confirm password
                    input.form-control(
                        type="password"
                        v-model="confirmPassword"
                    )
            .text-right
                button.btn.btn-primary(
                    type="button"
                    @click=""
                ) Sign Up
</template>


<script>
export default {
    name: "SignUp",

    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
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