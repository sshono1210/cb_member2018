<template>
  <section class="p-mind">
    <div class="p-mind__inner">
      <div class="p-mind__heading">
        <h3 class="p-mind__headingTitle">chatboxの理念</h3>
        <p class="p-mind__headingIntro">chatboxの理念は「それぞれがスキルアップするためのプラットフォームをつくる」こと。この理念に沿って、困った事を気軽に相談しあえる環境づくりや新しい技術を身につけるためのイベントの運営など、個々の成長を積極的にサポートしています。</p>
      </div>
      <ul class="p-mind__lists">
        <mind :index="index+1" v-for="(item, index) in mindLists" :item="item" :key="index"></mind>
      </ul>
    </div>
  </section>
</template>

<script>
import Mind from "./_Mind.vue";
export default {
  props: {
    mindLists: Array
  },
  components: {
    Mind: Mind
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-mind {
  margin-bottom: 0;
  @include desktop {
    margin-bottom: 130px;
  }
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
    margin-bottom: 60px;
    @include desktop {
      margin-bottom: 100px;
    }
  }
  &__lists {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @include desktop {
      box-sizing: border-box;
      padding: 0 40px;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
  }
}
</style>
