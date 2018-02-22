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
  import Mind from "./_Mind.vue"
  export default {
    data () {
      return {
        mindLists: [
          {
            title: 'コミュニケーション',
            text1: 'フラットな関係性',
            text2: 'Slack・ハングアウト等の導入',
            text3: '無駄なMtgを行わない',
            thumbnail: '/images/point_talk.jpg'
          },
          {
            title: '個性重視',
            text1: '個々の得意分野を活かす',
            text2: 'バックグラウンドの異なるスタッフ',
            text3: '学生アルバイトも多数在籍',
            thumbnail: '/images/point_personal.jpg'
          },
          {
            title: '学ぶ＆働く',
            text1: 'スクールへの無償参加',
            text2: '勉強会・コミュニティの運営',
            text3: '質問大歓迎の社風',
            thumbnail: '/images/point_growth.jpg'
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
        justify-content: center;
        flex-wrap: nowrap;
      }
    }
  }
</style>
