<template>
  <div class="p-profile">
    <div class="p-profile--image" style="background-image: url('/images/member_01.png')"></div>
    <div class="p-profile--company">株式会社 chatbox</div>
    <div class="p-profile--title">代表取締役</div>
    <div class="p-profile--name">後藤 知宏</div>
    <div class="p-profile--nameEn">Goto<br>Tomohiro</div>
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

  .p-profile{
    &--image{
      margin: 0 auto;
      height: 20vw;
      width: 20vw;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: .5rem;
    }

    &--company,
    &--title{
      font-size: .9rem;
      text-align: center;
    }
    &--name{
      font-size: 1.5rem;
      text-align: center;
      margin: .5rem 0;
    }
    &--nameEn{
      width: 20vw;
      margin: 0 auto;
      font-size: 1rem;
      line-height: 1em;
      text-align: center;
      padding-bottom:.5rem;
      color: #CCC4CB;
      border-bottom: #C3504F 2px solid;
    }


  }
</style>
