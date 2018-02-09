<template>
  <section>
    <page-hero></page-hero>
    <page-concept></page-concept>
    <page-mind :minds="minds"></page-mind>
    <page-skillup :skills="skills"></page-skillup>
    <page-member :members="members"></page-member>
    <page-contact></page-contact>
    <contact-nav></contact-nav>
  </section>
</template>

<script>
  import PageHero from '~/components/pages/Index/Hero.vue'
  import PageMind from '~/components/pages/Index/Mind.vue'
  import PageConcept from '~/components/pages/Index/Concept.vue'
  import PageMember from '~/components/pages/Index/Member.vue'
  import PageContact from '~/components/pages/Index/Contact.vue'
  import PageSkillup from '~/components/pages/Index/SkillUp.vue'
  import ContactNav from '~/components/pages/Index/ContactNav.vue'

  export default {
    data () {
      return {
        minds: [
          {
            index: 1
          },
          {
            index: 2
          },
          {
            index: 3
          }
        ],
        skills: [
          {
            index: 1
          },
          {
            index: 2
          },
          {
            index: 3
          }
        ],
        members: [
          {
            index: 1
          },
          {
            index: 2
          },
          {
            index: 3
          },
          {
            index: 4
          }
        ]
      }
    },

    components: {
      PageHero,
      PageMind,
      PageConcept,
      PageMember,
      PageContact,
      PageSkillup,
      ContactNav
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
  @import "~assets/scss/app.scss";

</style>
