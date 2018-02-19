<template>
  <section class="p-concept">
    <div class="p-concept__inner">
      <div class="p-concept__heading">
        <h3 class="p-concept__headingTitle">働く、学ぶ、成長する</h3>
      </div>
      <div class="p-concept__sec01">
        <div class="p-concept__sec01Img"></div>
        <div class="p-concept__sec01Description">
          この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。<br>
          <br>
          この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        </div>
      </div>
      <div class="p-concept__sec02">
        <div class="p-concept__sec02Keywords">
          <span class="p-concept__sec02Keyword">多様なコミュニケーション</span>
          <span class="p-concept__sec02Keyword">個性を重視した環境</span>
          <span class="p-concept__sec02Keyword">学びながら働ける環境</span>
        </div>
        <div class="p-concept__sec02Img"></div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  .p-concept{
    margin-top: 80px;
    margin-bottom: 60px;
    &__inner {
      @include c-container;
    }
    &__heading {

    }
    &__headingTitle {
      @include c-titleCenter;
    }
    &__headingIntro {

    }
    &__sec01 {
      @include desktop() {
        position: relative;
      }
    }
    &__sec01Img {
      display: inline-block;
      width: 100%;
      background: url("/images/concept_photo01.jpg") center no-repeat;
      background-size: contain;
      @include desktop() {
        width: 55%;
        background-size: cover;
      }
      &::before {
        content: "";
        display: block;
        padding-top: 100%;
      }
    }
    &__sec01Description {
      display: inline-block;
      width: 100%;
      box-sizing: border-box;
      line-height: 2;
      right: 0;
      z-index: 10;
      @include desktop() {
        padding: 20px 0 25% 100px;
        width: 60%;
        position: absolute;
        background: linear-gradient(left,hsla(0,0%,99%,0),hsla(0,0%,99%,.5) 10%,hsla(0,0%,100%,.8) 20%,hsla(0,0%,100%,.85) 25%,hsla(0,0%,100%,.9) 61%,#fff 80%);
      }
    }
    &__sec02 {
      display: flex;
      @include desktop() {
        padding-bottom: 300px;
        position: relative;
      }
    }
    &__sec02Img {
      display: inline-block;
      width: 59%;
      height: 59%;
      margin: 30px 0;
      background: url("/images/concept_photo02.jpg") center no-repeat;
      background-size: cover;
      &::before {
        content: "";
        display: block;
        padding-top: 70%;
      }
      @include desktop() {
        position: absolute;
        width: 50%;
        top: -90px;
        right: 0;
        z-index: 20;
        margin: 0;
        height: auto;
      }
    }
    &__sec02Keywords {
      display: inline-block;
      width: 40%;
      text-align: center;
      @include desktop() {
        width: 50%;
        position: absolute;
        top: -60px;
        left: 0;
        background: linear-gradient(top,hsla(0,0%,99%,0),hsla(0,0%,99%,.5) 10%,hsla(0,0%,100%,.8) 20%,hsla(0,0%,100%,.85) 25%,hsla(0,0%,100%,.9) 61%,#fff 80%);
      }
    }
    &__sec02Keyword {
      margin: 30px 5px;
      display: inline-block;
      font-weight: bold;
      vertical-align: top;
      writing-mode: vertical-rl;
      color: #C3504F;
      text-orientation: upright;
      font-feature-settings: 'pkna';
      font-size: 1.8rem;
      letter-spacing: 2px;
      @include desktop() {
        margin: 30px 1em;
      }
    }

  }

</style>
