<template lang="pug">
    .contact-details(
        :key="contact.id"
    )

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

        .flex-grow-1

        .container.pt-2
            .row.w-100.mx-auto
                button-group.col(
                    :editBtn="true"
                    :contact="contact"
                    @edit="$emit('edit')"
                    @hide="$emit('hide')"
                )
              

</template>

<script>
import ButtonGroup from './ButtonGroup.vue';

export default {

    components: {
        ButtonGroup,
    },

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