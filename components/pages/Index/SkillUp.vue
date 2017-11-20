<template>
  <div>
    <section class="p-skill">
      <div class="p-skill--inner">
        <h1 class="p-skill--title">chatboxのスキルアップ施策</h1>
        <div class="p-skill--sentence">Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ</div>
      </div>
      <div class="p-skill--pointList">
        <page-panel class="p-skill--point" v-for="skill in skills" :item="skill" :key="skill.index"></page-panel>
      </div>
    </section>
  </div>
</template>

<script>
  import PagePanel from "./_Panel.vue"
  export default {
    props: {
      skills: Array
    },
    data () {
      return {}
    },
    components: {
      PagePanel
    },
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  /*@import "~assets/scss/object/component/_button.scss";*/
  .p-skill{
    @include c-container();
    &--title{
      @include c-title;
    }
    &--sentence{
      @include c-sentence;
    }
    &--pointList{
    }
    &--point{
    }
  }

</style>
