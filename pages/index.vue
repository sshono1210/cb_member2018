<template>
  <section>
    <page-hero></page-hero>
    <page-concept></page-concept>
    <page-mind :mind-lists="mindLists"></page-mind>
    <page-skillup :skill-items="skillItems"></page-skillup>
    <page-member :list-items="listItems"></page-member>
    <page-contact></page-contact>
  </section>
</template>

<script>
import PageHero from "~/components/pages/Index/Hero.vue";
import PageConcept from "~/components/pages/Index/Concept.vue";
import PageMind from "~/components/pages/Index/Mind.vue";
import PageSkillup from "~/components/pages/Index/SkillUp.vue";
import PageMember from "~/components/pages/Index/Member.vue";
import PageContact from "~/components/pages/Index/Contact.vue";

export default {
  data() {
    return {};
  },
  computed: {
    listItems() {
      return this.$store.state.listItems;
    },
    mindLists() {
      return this.$store.state.mindLists;
    },
    skillItems() {
      return this.$store.state.skillItems;
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
  mounted() {
    if (!window.navigator) {
      this.online = false;
      return;
    }
  },
  methods: {}
};
</script>

<style lang="sass">

</style>
