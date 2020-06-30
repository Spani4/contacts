<template lang="pug">
    .contacts-page.bg-secondary
        app-header

        .contacts-page__content.container(
            v-if="!editorEnabled"
        )
            .row
                .col-12.col-md-6.col-lg-7.order-md-1
                    contact-details(
                        v-if="selectedContact"
                        :contact="selectedContact"
                        @edit="editContact"
                        @unselect="selectedContact = null"
                    )            
                .col-12.col-md-6.col-lg-5
                    contacts-list(
                        v-model="selectedContact"
                    )

        contact-editor(
            v-else
            :contactToEdit="selectedContact"
            @close="closeEditor"
        )

</template>

<script>

import AppHeader from '~/vue/components/common/AppHeader.vue';
import ContactEditor from '~/vue/components/ContactsPage/ContactEditor.vue';
import ContactsList from '~/vue/components/ContactsPage/ContactsList.vue';
import ContactDetails from '~/vue/components/ContactsPage/ContactDetails.vue';

export default {
    name: "ContactsPage",
    components: {
        AppHeader,
        ContactEditor,
        ContactsList,
        ContactDetails
    },

    data() {
        return {
            editorEnabled: false,
            selectedContact: null,
        }
    },

    methods: {
        editContact() {
            this.editorEnabled = true;
        },

        createContact() {
            this.selectedContact = null;
            this.editorEnabled = true;
        },

        closeEditor() {
            this.editorEnabled = false;
        }

    }

}
</script>

<style lang="scss">

</style>