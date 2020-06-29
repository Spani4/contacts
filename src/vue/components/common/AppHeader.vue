<template lang="pug">
    header.bg-primary-dark.text-white.py-3
        .container
            .row
                .col-12.col-sm-3.header__left
                    h1.header__title Contacts
                .col-12.col-sm-9.header__right
                    span {{ email }}
                    a.header__logout-link.text-secondary(
                        href="/auth"
                        @click.prevent="logout"
                    ) Exit
</template>


<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('auth/logout');
        }
    },
    computed: {
        email() {
            return this.$store.state.user.email;
        }
    }
}
</script>
