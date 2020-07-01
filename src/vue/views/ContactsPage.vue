<template lang="pug">
    .contacts-page.bg-secondary
        app-header
        
        .contacts-page__content.container(
            v-if="!editorEnabled"
        )
            .row
                .col-12.col-md-6.col-lg-5.mb-3.mb-md-0
                    .text-center.mb-3
                        button.btn.btn-primary.btn-block(
                            type="button"
                            @click="createContact"
                        ) Add new
                    contacts-list(
                        v-model="selectedContact"
                        :selectedContact="selectedContact"
                    )
                .col-12.col-md-6.col-lg-7.mh-100.overflow-auto
                    transition(name="fade-left-slide" mode="out-in")
                        contact-details(
                            v-if="selectedContactExists"
                            :contact="selectedContact"
                            @edit="editContact"
                            @hide="selectedContact = null"
                        )
        contact-editor(
            v-else
            :contactToEdit="selectedContact"
            @hide="closeEditor"
        )


</template>

<script>
import { mapState } from 'vuex'

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
    },

    computed: {
        ...mapState('contacts', ['contacts']),

        selectedContactExists() {
            const index = this.contacts.indexOf(this.selectedContact);
            return ( index > -1 ) && this.selectedContact;
        }
    }
}
</script>

<style lang="scss">

</style>