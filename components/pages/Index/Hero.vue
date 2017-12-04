<template>
  <div>
    <div class="p-hero">
      <div class="p-hero--inner">
        <h1 class="p-hero--title">chatboxでの働き方</h1>
        <p class="p-hero--sentence">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
      </div>
      <!--<div class="p-catch_angle" ></div>-->
    </div>
  </div>
</template>

<script>
    import PageFooter from '~/components/Footer.vue'
</script>
<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  /*@import "~assets/scss/object/component/_title.scss";*/
  /*@import "~assets/scss/object/component/_button.scss";*/

  .p-hero{
    padding-top:12rem;
    padding-bottom: 1.3rem;
    background: url("/static/images/member_top.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    position: relative;
    @include c-container();
    &--title{
      font-weight: bold;
    }
    &::after{
      content: " ^ ";
      padding: 20px;
      background: #B43B3E;
      position: relative;
      top:35px;
      left: 50%;
      border-radius: 50%;
      margin: auto;
      border: solid 1px #ffffff;
      margin-top: 25px;
      color: #ffffff;
      text-align: center;
      font-weight: bold;
    }
  }
  #pagejump_demo .scroll_button_btm a{
    position: fixed;
    display: block;
    right:50px;
    top:50px;
    background: #313131;
    color:#fff;
    padding:20px;
  }
  @media screen and (min-width: 768px) {
    .p-hero{
      padding-top:24rem;
      padding-bottom: 2.3rem;
    }
  }
</style>
