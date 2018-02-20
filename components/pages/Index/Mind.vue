<template>
  <section class="p-mind">
    <div class="p-mind__inner">
      <div class="p-mind__heading">
        <h3 class="p-mind__headingTitle">chatboxの理念</h3>
        <p class="p-mind__headingIntro">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
      </div>
      <ul class="p-mind__lists">
        <mind :index="index+1" v-for="(item, index) in mindLists" :item="item" :key="index"></mind>
      </ul>
    </div>
  </section>
</template>

<script>
  import Mind from "./_Mind.vue"
  export default {
    data () {
      return {
        mindLists: [
          {
            title: '見出し1',
            text: '本文1'
          },
          {
            title: '見出し2',
            text: '本文2'
          },
          {
            title: '見出し3',
            text: '本文3'
          }
        ]
      }
    },
    components: {
      Mind: Mind
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-mind{
    &__inner {
      @include c-container;
    }
    &__heading {

    }
    &__headingTitle {
      @include c-titleCenter;
    }
    &__headingIntro {
      line-height: 2;
      margin-bottom: 80px;
    }
    &__lists {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @include desktop {
        flex-wrap: nowrap;
      }
    }
  }
</style>
