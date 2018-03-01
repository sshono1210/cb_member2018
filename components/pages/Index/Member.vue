<template>
  <section class="p-member">
    <div class="p-member__heading">
      <div class="p-member__inner">
        <h3 class="p-member__headingTitle">Member</h3>
      </div>
    </div>
    <div class="p-member__inner">
      <div class="p-member__lists">
        <page-member v-for="(item, index) in listItems" :item="item" :index="index"></page-member>
      </div>
    </div>
  </section>
</template>

<script>
  import PageMember from "./_Member.vue"
  export default {
    props: {
      members: Array
    },
    data () {
      return {
        listItems: [
          {
            position: '代表取締役',
            name: '後藤 知宏',
            nameEn: 'Goto Tomohiro',
            thumbnail: '/images/member_goto.jpg'
          },
          {
            position: 'エンジニア',
            name: '庄埜 詩織',
            nameEn: 'Shono Shiori',
            thumbnail: '/images/member_shono.jpg'
          },
          {
            position: 'デザイナー',
            name: '安井 利紗',
            nameEn: 'Yasui Risa',
            thumbnail: '/images/member_yasui.jpg'
          },
          {
            position: 'デザイナー',
            name: '岡山 海恵',
            nameEn: 'Okayama Kaie',
            thumbnail: '/images/member_okayama.jpg'
          },
          {
            position: 'アルバイト',
            name: '飛田 一貴',
            nameEn: 'Tobita Kazuki',
            thumbnail: '/images/member_tobita.jpg'
          },
          {
            position: 'アルバイト',
            name: '高橋 秀明',
            nameEn: 'Takahashi Hideaki',
            thumbnail: '/images/member_takahashi.jpg'
          }
        ]
      }
    },
    components: {
      PageMember
    },
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  .p-member{
    background: #FAF7F7;
    margin-bottom: 168px;
    @include desktop {
      margin-bottom: 150px;
    }
    &__inner {
      @include c-container;
    }
    &__heading {
      background: linear-gradient(#fff 50%, #FAF7F7 50%);
    }
    &__headingTitle {
      @include c-titleCenter;
    }
    &__lists {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
