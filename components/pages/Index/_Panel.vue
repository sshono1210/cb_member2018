<template>
  <div class="p-panel">
    <div class="p-panel--inner">
      <div class="p-panel--image">
        <div class="p-panel--images01"></div>
      </div>
      <div class="p-panel--body">
        <h3 class="p-panel--title">スクールや勉強会</h3>
        <div class="p-panel--sentence">slackやGitHubなどのITツールに・・・この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: Object
    },
    data () {
      return {}
    },
    computed: {
    },
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  /*@import "~assets/scss/object/component/_button.scss";*/

  .p-panel {
    &--inner {
      display: flex;
      margin-bottom: 2rem;
      height: 24rem;
      border-right: #C3504F 2px solid;
    }
    &--inner:nth-child(2) {
      display: flex;
      margin-bottom: 2rem;
      border-left: #C3504F 2px solid;
      flex-direction:row-reverse;
    }
    &--image {
      width: 30%;
    }
    &--images01 {
      background: url("/images/vision01.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      height:100%;
    }
    &--body{
      width: 70%;
      padding: 2rem 3rem;
      background: #FAF7F7;
    }
    &--title{
      font-size: 1em;
      font-weight: bold;
    }
    &--sentence{
      @include c-sentence;
    }
  }
</style>
