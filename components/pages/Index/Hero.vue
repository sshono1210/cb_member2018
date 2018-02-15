<template>
  <div>
    <div class="p-hero">
      <div class="p-hero__backgoundFilter">
        <div class="p-hero__inner">
          <div class="p-hero__heading">
            <h2 class="p-hero__headingTitle">chatboxでの働き方</h2>
            <p class="p-hero__headingIntro">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
  @import "~assets/scss/layout/_layout.scss";
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-hero{
    background: url('/images/member_top.jpg') center / cover no-repeat;
    height: 700px;
    position: relative;
    &__backgoundFilter {
      background: linear-gradient(90deg, rgba(195,80,79,0.49) 0%, rgba(182,80,78,0.29) 67.45%, rgba(123,5,3,0) 100%);
      height: 700px;
    }
    &__inner {
      @include c-container;
    }
    &__heading {
      color: #FFF;
      font-weight: bold;
      position: absolute;
      bottom: 105px;
    }
    &__headingTitle {
      color: #FFF;
      font-weight: bold;
      font-size: 4rem;
      letter-spacing: 6px;
      line-height: 1.5;
    }
    &__headingIntro {
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
</style>
