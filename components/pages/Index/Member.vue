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
          <div class="p-member__circle"></div>
          <div class="p-member__position">
            株式会社 chatbox / 代表取締役
          </div>
          <p class="p-member__name">後藤知宏</p>
          <div class="p-member__kana">
            Goto Tomohiro
          </div>
        </div>
        <div class="p-member__listItem">
          <div class="p-member__circle"></div>
          <div class="p-member__position">
            株式会社 chatbox / エンジニア
          </div>
          <p class="p-member__name">庄埜詩織</p>
          <div class="p-member__kana">
            Shono Shiori
          </div>
        </div>
        <div class="p-member__listItem">
          <div class="p-member__circle"></div>
          <div class="p-member__position">
            株式会社 chatbox / デザイナー
          </div>
          <p class="p-member__name">安井利紗</p>
          <div class="p-member__kana">
            Yasuri Risa
          </div>
        </div>
        <div class="p-member__listItem">
          <div class="p-member__circle"></div>
          <div class="p-member__position">
            株式会社 chatbox / デザイナー
          </div>
          <p class="p-member__name">岡山海恵</p>
          <div class="p-member__kana">
            Okayama Kaie
          </div>
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
    &__circle{
      background-image: url("/images/member_goto.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
    }
    &__position{
      color: #393739;
      font-size: 1.2rem;
      margin: 6% 0 4% 0;
    }
    &__name{
      letter-spacing: 1px;
      margin: 6% 0;
      color: #393739;
      font-size: 2rem;
    }
    &__kana{
      width: 70%;
      margin: 0 auto 30%;
      padding-bottom: 10%;
      color: #CCC4CB;
      font-family: YuMincho;
      font-size: 1.2rem;
      border-bottom: 2px solid #C3504F;
    }
  }
</style>
