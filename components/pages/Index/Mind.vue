<template>
  <div>
    <section class="p-idea">
      <div class="p-idea--inner">
        <h2 class="p-idea--title">chatboxの理念</h2>
        <div class="p-idea--sentence">
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
        </div>
        <div class="p-idea--pointList">
          <page-card class="p-idea--point" v-for="mind in minds" :item="mind" :key="mind.index"></page-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import PageCard from "./_Card.vue"
  export default {
    props: {
      minds: Array
    },
    data () {
      return {}
    },
    components: {
      PageCard
    },
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  /*@import "~assets/scss/object/component/_button.scss";*/
  .p-idea{
    @include c-container();
    &--title{
      @include c-title;
    }
    &--sentence{
      @include c-sentence;
    }
    &--pointList{
      display: flex;
      flex-wrap: wrap;
    }
    &--point{
      align-items: center;
      width: 50%;
      padding: .5rem;
    }
  }
</style>
