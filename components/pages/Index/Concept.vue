<template>
  <div>
    <section class="p-concept">
      <div class="p-concept--inner">
        <h1 class="p-concept--title">働く、学ぶ、成長する</h1>
        <div class="p-concept--box">
          <!--<div class="p-concept&#45;&#45;image">-->
          <!--</div>-->
          <div class="p-concept--sentence">
            <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
            <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
          </div>
        </div>
        <div class="p-concept--tags">
          <div class="p-concept--text">
            <p class="p-concept--tag">学びながら働ける環境</p>
            <p class="p-concept--tag">個性を重視した環境</p>
            <p class="p-concept--tag">多彩なコミュニケーション</p>
          </div>
          <div class="p-concept--image2">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/layout/_layout.scss";
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  /*@import "~assets/scss/object/component/_button.scss";*/

  .p-concept{
    @include c-container;
    &--title{
      @include c-title();
    }
    &--text{
      display: flex;
      width: 30%;
      margin: 0 auto;
    }
    &--image{
      height: 20rem;
      /*background: url('/images/member_main01.jpg');*/
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom: 2rem;
    }
    &--box{
      display: flex;
      margin-bottom: 2rem;
      background: linear-gradient(rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 70%, rgba(255, 255, 255, 1)), url('/images/member_main01.jpg') center bottom / 80% no-repeat;
      background-position-x: 0;
      background-position-y: 0;
      background-size: contain;
    }
    &--sentence{
      @include c-sentence;
      margin-top: 86%;
    }
    &--image2{
      display: flex;
      flex-flow: row-reverse nowrap;
    }
    &--image2{
      width: 50%;
      height: 20rem;
      background: url('/images/member_main02.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom: 2rem;
    }
    &--tags{
      display: flex;
      width: 100%;
      justify-content:space-between;
      @include desktop(){
        width: 100%;
      }
    }
    &--tag{
      writing-mode: vertical-rl;
      color: #C3504F;
      font-weight: bold;
      margin: 3rem 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .p-concept{
      &--title{
        padding: 7rem 0;
        font-size: 2.2rem;
    }
      &--text{
        width: 15%;
      }
      &--sentence{
        @include c-sentence;
        margin-left: 66%;
        margin-top: 19%;
        width: 40%;
      }
      &--image{
        width: 100%;
        display:block;
        //background-size: 30%;
        //margin-bottom: 2rem;
        //background: linear-gradient(rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 70%, rgba(255, 255, 255, 1)), url('/images/member_main01.jpg') center bottom / 80% no-repeat;
      }
      &--image2{
        height: 44rem;
      }
    }
  }
</style>
