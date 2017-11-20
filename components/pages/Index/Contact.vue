<template>
  <div class="p-contact">
    <div class="p-contact--inner">
      <h1 class="p-contact--title">Contact</h1>
      <p class="p-contact--sentence">求人・スクールのご用命は・・・Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
      <a class="p-contact--button" href="/contact">お問い合わせフォームへ </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  @import "~assets/scss/object/component/_button.scss";

  .p-contact{
    @include c-container;
    margin-bottom: 2rem;
    &--title{
      @include c-title;
      text-align: center;
    }
    &--sentence{
      @include c-sentence;
      max-width: 550px;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
    &--button{
      @include c-btn_block;
      max-width:470px;
      margin: 0 auto;
    }
  }
</style>
