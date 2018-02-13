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

  .p-contact{
    @include c-container;
    margin-bottom: 2rem;
    margin-top: 2.0rem;
    @include desktop(){
      margin-top: 150px;
      text-align: center;
    }
    &--inner  {
      @include desktop(){
        text-align: center;
      }
    }
    &--title{
      @include c-title;
      text-align: center;
      margin-bottom: 1rem;
    }
    &--sentence{
      @include c-sentence;
      max-width: 550px;
      margin: 0 auto;
      margin-bottom: 2rem;
      @include desktop() {
        margin-bottom: 4rem;
      }
    }
    &--button{
      display: inline-block;
      padding: 3rem;
      width:100%;
      max-width: 100%;
      box-sizing: border-box;
      text-align: center;
      border-radius: 4px;
      color: #FFF;
      font-size: 1.5rem;
      font-weight: bold;
      background:#C3504F;
      text-decoration: none;
      position:relative;
      transition: all .5s;
      @include desktop {
        max-width: 450px;
        font-size: 2rem;
      }
      &:hover {
        opacity: .8;
        transition: all .5s;
        &::before {
          right: .2rem;
          transition: all .5s;
        }
      }
    }
    &--button::before {
      content: "";
      display: inline-block;
      width: 1.4rem;
      height: 1.4rem;
      background-image: url("/images/icon_arrow-white.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      position: absolute;
      right: .7rem;
      top: 50%;
      transform: translateY(-50%);
      transition: all .5s;
      @include desktop {
        width: 2rem;
        height: 2rem;
        right: 1rem;
      }
    }
  }
</style>
