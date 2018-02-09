<template>
  <div>
    <div class="p-hero">
      <div class="p-hero__inner">
        <div class="p-hero__heading">
          <h1 class="p-hero__headingTitle">chatboxでの働き方</h1>
          <p class="p-hero__headingIntro">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
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

  .p-hero{
    &__inner {
      @include c-container;
    }
    &__heading {

    }
    &__headingTitle {

    }
    &__headingIntro {

    }
  }
</style>
