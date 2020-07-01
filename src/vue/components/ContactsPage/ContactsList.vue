<template lang="pug">
    .contacts-list
        .contacts-list__item(
            v-for="contact in contacts"
            :key="contact.id"
            :class="{ active: contact == selectedContact }"
            @click="$emit('input', contact)"
        ) {{ contact.name }}

</template>

<script>
import { mapState } from 'vuex'

export default {

    props: {
        selectedContact: Object,
    },
    
    computed: {
        ...mapState('contacts', ['contacts']),
    }
}
</script>