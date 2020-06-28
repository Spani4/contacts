<template lang="pug">
    .contacts-page
        app-header
        contact-editor
</template>

<script>

import AppHeader from '~/vue/components/common/AppHeader.vue';
import ContactEditor from '~/vue/components/ContactsPage/ContactEditor.vue';

export default {
    name: "ContactsPage",
    components: {
        AppHeader,
        ContactEditor
    }

}
</script>

<style lang="scss">

</style>