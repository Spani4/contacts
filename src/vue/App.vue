<template lang="pug">
    div
        router-view
        loader
</template>


<script>
import Loader from '~/vue/components/Loader.vue';

export default {

    components: {
        Loader,
    },
}
</script>

<style lang="scss">
</style>