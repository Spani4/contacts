<template lang="pug">
    .contact-editor
        form.container.py-3.bg-secondary.text-dark

            .row.form-group
                label.col-12.col-md-6.col-xl-4
                    h3.mb-1 Contact name
                    input.form-control(
                        v-model="contact.name"
                    )
                        
            .row.form-group
                label.col-12.col-xl-8
                    h3.mb-1 Address
                    textarea.form-control(
                        v-model.trim="contact.address"
                    )

            .row.form-group
                label.col-12.col-md-6.col-xl-4
                    h3.mb-1 Main phone
                    input.form-control(
                        v-model.trim="contact.phones[0].number"
                    )

            .row.form-group
                h3.col-12.mb-1 Additional phones


                .p-2.w-100.border-bottom(
                    v-for="(phone, index) in additionalPhones"
                )
                    label.col-12.col-sm-6.col-xl-4
                        h5.mb-1 Description               
                        input.form-control(
                            v-model.trim="additionalPhones[index].description"
                        )
                    label.col-12.col-sm-6.col-xl-4
                        h5.mb-1 Phone number
                        input.form-control(
                            v-model.trim="additionalPhones[index].number"
                        )

                .col-12.pt-3
                    button.btn.btn-primary(
                        type="button"
                        @click="addPhone"
                    ) Add phone
                    
            .row.form-group
                label.col-12.col-xl-8
                    h3.mb-1 Details
                    textarea.form-control(
                        v-model.trim="contact.details"
                    )
            
            .row.form-group
                .col-12.col-xl-8.btn-group
                    button.btn.btn-success(
                        type="button"
                        :disabled="!contact.name.length"
                        @click="saveContact"
                    ) Save contact
                    button.btn.btn-danger(
                        type="button"
                        v-if="contactToEdit"
                        @click="removeContact"
                    ) Remove contact
                    button.btn.btn-light(
                        type="button"
                        @click="cancelEditing"
                    ) Cancel
            
            
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from 'axios';

export default {

    props: {
        contactToEdit: Object,
    },
    
    data() {
        return {
            contact: {
                name: '',
                address: '',
                phones: [{ description: 'main', number: ''}],
                details: ''
            }
        }
    },

    computed: {
        ...mapState(['user']),

        additionalPhones() {

            return this.contact.phones.filter( (phone, index) => index !== 0 );
        }
    },

    methods: {
        ...mapActions('contacts', ['addContact']),

        addPhone() {
            this.contact.phones.push({
                description: 'Mobile',
                number: ''
            })
        },

        saveContact() {
            this.addContact(this.contact);
            // this.$store.dispatch('contacts/addContact', this.contact);
        },
        removeContact() {},

        async cancelEditing() {
            // 'https://contacts-65dbf.firebaseio.com'
            // console.log(this.user)
            this.addContact(this.contact);
            // const jwt = JSON.parse(localStorage.getItem('jwt'));
            // const response = await axios.post(`https://contacts-65dbf.firebaseio.com/${this.user.id}.json?auth=${jwt.token}`, this.contact);
            // console.log(response);
        },
    },

    mounted() {

        if ( this.contactToEdit ) {
            this.contact = this.contactToEdit;
        }
    }
}
</script>
