<template>
  <section class="p-skillUp">
    <div class="p-skillUp__inner">
      <div class="p-skillUp__heading">
        <h3 class="p-skillUp__headingTitle">スキルアップ施策</h3>
        <p class="p-skillUp__headingIntro">Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ</p>
      </div>
      <ul class="p-skillUp__Lists">
        <skillup-list :index="index" :skill="item" v-for="(item,index) in listItems" :key="index"></skillup-list>
      </ul>
    </div>
  </section>
</template>

<script>
  import SkillupList from "./_SkillUpList.vue"
  export default {
    data () {
      return {
        listItems: [
          {
            title: '多様なコミュニケーション',
            text: 'Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ',
            thumbnail: '/images/skill_talk.jpg'
          },
          {
            title: '柔軟な勤務体制',
            text: 'Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ',
            thumbnail: '/images/skill_talk.jpg'
          },
          {
            title: 'スクールや勉強会',
            text: 'Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ',
            thumbnail: '/images/skill_event.jpg'
          }
        ]
      }
    },
    components: {
        SkillupList
    },
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  .p-skillUp{
    &__inner {
      @include c-container;
    }
    &__heading {

    }
    &__headingTitle {
      @include c-titleCenter;
    }
    &__headingIntro {
      margin-bottom: 40px;

    }
    &__Lists {
    }

  }

</style>
