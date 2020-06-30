<template lang="pug">
    .contact-details.py-3

        h1.mb-3 {{ contact.name }}

        .mb-3
            h3 Phones:
            .row
                template(
                    v-for="phone in contact.phones"
                )
                    .col-6 {{ phone.description }}
                    .col-6 {{ phone.number }}

        .mb-3(v-if="contact.address.length")
            h3 Address
            div {{ contact.address }}

        .mb-3(v-if="contact.details.length")
            h3 Details
            div {{ contact.details }}

        .container.pt-2
            .row.btn-group.w-100
                button.col-4.btn.btn-primary(
                    type="button"
                    @click="$emit('edit')"
                ) Edit
                button.col-4.btn.btn-light(
                    type="button"
                    @click="$emit('unselect')"
                ) Hide
                button.col-4.btn.btn-danger(
                    type="button"
                    @click=""
                ) Remove


</template>

<script>
export default {
    props: {
        contact: Object,
    },

    computed: {

        additionalPhones() {
            return this.contact.phones.filter( (phone, index) => index !== 0 );
        },
    },
}
</script>