<template>
  <section>
    <page-hero></page-hero>
    <page-concept></page-concept>
    <page-mind></page-mind>
    <page-skillup></page-skillup>
    <page-member></page-member>
    <page-contact></page-contact>
  </section>
</template>

<script>
  import PageHero from '~/components/pages/Index/Hero.vue'
  import PageConcept from '~/components/pages/Index/Concept.vue'
  import PageMind from '~/components/pages/Index/Mind.vue'
  import PageSkillup from '~/components/pages/Index/SkillUp.vue'
  import PageMember from '~/components/pages/Index/Member.vue'
  import PageContact from '~/components/pages/Index/Contact.vue'

  export default {
    data () {
      return {
      }
    },

    components: {
      PageHero,
      PageConcept,
      PageMind,
      PageSkillup,
      PageMember,
      PageContact
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }

</script>

<style lang="sass">

</style>
