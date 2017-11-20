<template>
  <div class="p-card">
    <div class="p-card--index"><span>Point {{item.index}}</span></div>
    <div class="p-card--inner">
      <div class="p-card--image"></div>
      <div class="p-card--body">
        <h3 class="p-card--title">コミュニケーション</h3>
        <div class="p-card--sentence">
          <p>リモートOK</p>
          <p>slackやGitHubの導入</p>
          <p>遊び心も忘れない会話</p>
        </div>
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

  .p-card{
    &--index{
      text-align: center;
      position: relative;
      z-index: 0;
      height:3.5rem;
      width: 7rem;
      margin: 0 auto;
      border-radius:3.5rem 3.5rem 0 0;
      background: #C3504F;
      color: white;
      line-height: 4rem;
    }
    &--inner{
      border-top: #C3504F 1px solid;
      background: #FAF7F7;
      z-index: 100;
    }
    &--image{
      height:10rem;
      background: url("/images/vision01.jpg");
      background-size: cover;
      background-repeat: no-repeat;
    }
    &--body{
      padding: 1em;
    }
    &--title{
      font-size: 1em;
      font-weight: bold;
    }
    &--sentence{
      font-size: .8em;
    }
  }
</style>
