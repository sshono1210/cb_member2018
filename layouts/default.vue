<template>
  <div>
    <nuxt/>
    <page-footer></page-footer>
  </div>

</template>

<script>
  import PageFooter from '~/components/Footer.vue'

  export default {
    components: {
      PageFooter
    },
    data () {
      return {}
    }
  }
</script>

<style>
</style>
