<template>
  <div class="p-card">
    <div class="p-card--index"><span>Point</span></div>
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
    computed: {},
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";
/*@import "~assets/scss/object/component/_button.scss";*/

.p-card {
  &--index {
    text-align: center;
    position: relative;
    z-index: 0;
    height: 3.5rem;
    width: 7rem;
    margin: 0 auto;
    border-radius: 3.5rem 3.5rem 0 0;
    background: #c3504f;
    color: white;
    line-height: 4rem;
  }
  &--inner {
    border-top: #c3504f 2px solid;
    background: #faf7f7;
    z-index: 100;
    overflow: hidden;
  }
  &--image {
    height: 17rem;
    background: url("/images/vision01.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  &--body {
    padding: 1em;
  }
  &--title {
    font-size: 1em;
    font-weight: bold;
  }
  &--sentence {
    font-size: 0.8em;
  }
}
@media screen and (min-width: 768px) {
  .p-concept--image {
    width: 100%;
    display: inline-block;
    justify-content: space-between;
    &--sentence {
      width: 40%;
    }
  }
}
</style>
