<template>
  <section class="p-mind">
    <div class="p-mind__inner">
      <div class="p-mind__heading">
        <h3 class="p-mind__headingTitle">chatboxの理念</h3>
        <p class="p-mind__headingIntro">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
      </div>
      <ul class="p-mind__lists">
        <li class="p-mind__listItem">
          <div class="p-mind__listItemHeading">タイトル</div>
          <div class="p-mind__listItemThumb"></div>
          <div class="p-mind__listItemDescription">
              <div class="p-mind__listItemDescriptionTitle">見出し</div>
              <span class="p-mind__listItemDescriptionText">本文</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-mind{
    &__inner {
      @include c-container;
    }
    &__heading {

    }
    &__headingTitle {
      @include c-titleCenter;
    }
    &__lists{
      background: red;
    }
    &__listItem{
      display: inline-block;
      background: blue;
    }

  }
</style>
