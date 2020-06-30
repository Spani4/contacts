<template lang="pug">
    .contacts-list
        .contacts-list__item(
            v-for="contact in contacts"
            :key="contact.id"
            @click="$emit('input', contact)"
        ) {{ contact.name }}

</template>

<script>
import { mapState } from 'vuex'

export default {
    
    computed: {
        ...mapState('contacts', ['contacts']),
    }
}
</script>