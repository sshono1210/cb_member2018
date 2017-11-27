<template>
  <div>
    <section class="p-concept">
      <div class="p-concept--inner">
        <h1 class="p-concept--title">働く、学ぶ、成長する</h1>
        <div class="p-concept--image">
        </div>
        <div class="p-concept--sentence">
          <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
          <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
        </div>
        <div class="p-concept--image2">
          <div class="p-concept--image2image"></div>
          <div class="p-concept--tags">
            <p class="p-concept--tag">学びながら働ける環境</p>
            <p class="p-concept--tag">個性を重視した環境</p>
            <p class="p-concept--tag">多彩なコミュニケーション</p>
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
    &--image{
      height: 20rem;
      background: url('/images/member_main01.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom: 2rem;
    }
    &--sentence{
      @include c-sentence;
    }
    &--image2{
      display: flex;
      flex-flow: row-reverse nowrap;
    }
    &--image2image{
      width: 60%;
      height: 20rem;
      background: url('/images/member_main02.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom: 2rem;
    }
    &--tags{
      display: flex;
      width: 40%;
      justify-content: center;
      flex-wrap: wrap;
      @include desktop(){
        width: 100%;
      }
    }
    &--tag{
      writing-mode: vertical-rl;
      color: #C3504F;
      font-weight: bold;
      margin: 3rem 1rem;
      height: 20rem;
    }
  }

</style>
