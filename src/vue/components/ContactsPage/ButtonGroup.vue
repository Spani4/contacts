<template lang="pug">
    .btn-group
        button.col-4.btn.btn-primary(
            v-if="editBtn"
            type="button"
            @click="$emit('edit')"
        ) Edit
        button.btn.btn-success(
            v-if="saveBtn"
            type="button"
            :disabled="!contact.name.length"
            @click="saveContact"
        ) Save
        button.btn.btn-light(
            type="button"
            @click="$emit('hide')"
        ) Cancel
        button.btn.btn-danger(
            type="button"
            v-if="contact"
            @click="removeContact"
        ) Remove
</template>


<script>
import { mapActions } from 'vuex';

export default {

    props: {
        contact: Object,
        editBtn: Boolean,
        saveBtn: Boolean
    },

    methods: {

        ...mapActions('contacts', ['addContact', 'updateContact']),

        async saveContact() {

            if ( this.isNew ) {
                await this.addContact(this.contact);
            } else {
                await this.updateContact(this.contact);
            }

            this.$emit('hide');
        },

        async removeContact() {
            await this.$store.dispatch('contacts/removeContact', this.contact);
            this.$emit('hide');
        }
    },

    computed: {
        isNew() {
            return !Boolean(this.contact.id);
        }
    }
}
</script>