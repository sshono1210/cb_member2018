<template>
  <div>
    <div class="p-hero">
      <div class="p-hero--inner">
        <h1 class="p-hero--title">chatboxでの働き方</h1>
        <p class="p-hero--sentence">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  /*@import "~assets/scss/object/component/_title.scss";*/
  /*@import "~assets/scss/object/component/_button.scss";*/

  .p-hero{
    padding-top:12rem;
    padding-bottom: 1.3rem;
    background: url("/images/vision01.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    &--inner{
      @include c-container();
    }
    &--title{
      font-weight: bold;
    }
  }

</style>
