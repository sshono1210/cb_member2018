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
            nameEn: 'Goto Tomohiro'
          },
          {
            position: 'エンジニア',
            name: '庄埜 詩織',
            nameEn: 'Shono Shiori'
          },
          {
            position: 'デザイナー',
            name: '安井 利紗',
            nameEn: 'Yasui Risa'
          },
          {
            position: 'デザイナー',
            name: '岡山 海恵',
            nameEn: 'Okayama Kaie'
          },
          {
            position: 'アルバイト',
            name: '飛田 一貴',
            nameEn: 'Tobita Kazuki'
          },
          {
            position: 'アルバイト',
            name: '高橋 秀明',
            nameEn: 'Takahashi Hideaki'
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
