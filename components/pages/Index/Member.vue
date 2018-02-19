<template>
  <section class="p-member">
    <div class="p-member__heading">
      <div class="p-member__inner">
        <h3 class="p-member__headingTitle">Member</h3>
      </div>
    </div>
    <div class="p-member__inner">
      <div class="p-member__lists">
        <div class="p-member__listItem">
          <div class="p-member__listItemThumb"></div>
          <div class="p-member__listItemPosition">代表取締役</div>
          <p class="p-member__listItemName">後藤 知宏</p>
          <div class="p-member__listItemNameEn">Goto Tomohiro</div>
        </div>
        <div class="p-member__listItem">
          <div class="p-member__listItemThumb"></div>
          <div class="p-member__listItemPosition">エンジニア</div>
          <p class="p-member__listItemName">庄埜 詩織</p>
          <div class="p-member__listItemNameEn">Shono Shiori</div>
        </div>
        <div class="p-member__listItem">
          <div class="p-member__listItemThumb"></div>
          <div class="p-member__listItemPosition">デザイナー</div>
          <p class="p-member__listItemName">安井 利紗</p>
          <div class="p-member__listItemNameEn">Yasui Risa</div>
        </div>
        <div class="p-member__listItem">
          <div class="p-member__listItemThumb"></div>
          <div class="p-member__listItemPosition">デザイナー</div>
          <p class="p-member__listItemName">岡山 海恵</p>
          <div class="p-member__listItemNameEn">Okayama Kaie</div>
        </div>
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
      return {}
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
      justify-content: space-between;
    }
    &__listItem{
      width: 20%;
      text-align: center;
    }
    &__listItemThumb{
      margin-bottom: 10px;
      width: 100%;
      background-image: url("/images/member_goto.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
      &::before {
        content: "";
        display: block;
        padding-top: 100%;
      }
    }
    &__listItemPosition {
      margin-bottom: 8px;
      color: #393739;
      font-size: 1.2rem;
    }
    &__listItemName {
      margin-bottom: 4px;
      letter-spacing: 2px;
      color: #393739;
      font-size: 2rem;
    }
    &__listItemNameEn{
      margin: 0 auto 30%;
      padding-bottom: 10%;
      color: #CCC4CB;
      font-family: "Yu Mincho Medium", YuMincho, serif;
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      position: relative;
      &::after {
        content: "";
        width: 60%;
        border-bottom: 2px solid #C3504F;
        position: absolute;
        left: 20%;
        bottom: 0;
      }
    }
  }
</style>
