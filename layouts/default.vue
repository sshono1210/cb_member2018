<template>
  <div id="layout">
    <page-header></page-header>
    <nuxt/>
    <page-footer></page-footer>
  </div>
</template>


<script>
    import PageHeader from '~/components/Header.vue'
    import PageFooter from '~/components/Footer.vue'

    export default {
        components: {
            PageHeader,
            PageFooter
        },
        data () {
            return {}
        }
    }
</script>


<style lang="sass">
  @import "~assets/scss/app.scss";
</style>
