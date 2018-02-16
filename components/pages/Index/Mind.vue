<template>
  <section class="p-mind">
    <div class="p-mind__inner">
      <div class="p-mind__heading">
        <h3 class="p-mind__headingTitle">chatboxの理念</h3>
        <p class="p-mind__headingIntro">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
      </div>
      <ul class="p-mind__lists">
        <li class="p-mind__listItem">
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
    &__headingIntro {
      line-height: 2;
      margin-bottom: 80px;
    }
    &__lists {
      display: flex;
      justify-content: space-between;
      flex-wrap:wrap;
      @include desktop {
        flex-wrap: nowrap;
      }
    }
    &__listItem {
      display: block;
      border-top: 3px solid #C3504F;
      margin-bottom: 40px;
      width: 48%;
      background: #faf7f7;
      text-decoration: none;
      color: #393739;
      position: relative;
      z-index: 100;

      @include desktop {
        margin-bottom: 0;
        width: 32%;
        max-width: 32%;
        z-index: 0;
      }

      &::before {
        content: "point01";
        display: inline-block;
        border: 1px solid rgba(255,255,255,.5);
        border-radius: 100%;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 3;
        font-size: 1.4rem;
        color: #fff;
        background: #C3504F;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-25px);
        z-index: -10;
        @include desktop {
          border: none;
          width: 110px;
          height: 110px;
          font-size: 2rem;
          top: -55px;
          left: 50%;
          transform: translateX(-55px);
          z-index: -10;
        }
      }
    }
    &__listItem.num01::before{
      content: "01";
    }
    &__listItem.num02::before{
      content: "02";
    }
    &__listItem.num03::before{
      content: "03";
    }
    &__listItem.num04::before{
      content: "04";
    }
    &__listItemHeading {
      text-align: center;
      padding: 1.4rem;
      font-size: 1.7rem;
      font-weight: bold;
      background: #faf7f7;

      @include desktop {
        padding: 2rem;
        font-size: 1.8rem;
      }
    }
    &__listItemThumb {
      width: 100%;
      background: #Fff;
      background-image: url("/images/point_talk.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      &::before {
        content: "";
        display: block;
        padding-top: 50%;
      }
    }
    &__listItemDescription {
      padding: 1.7rem;
      @include desktop {
        padding: 2rem;
      }
    }
    &__listItemDescriptionTitle {
      margin-bottom: 1rem;
      text-align: center;
      font-size: 1.4rem;
      font-weight: bold;
      @include desktop {
        margin-bottom: 1.5rem;
        font-size: 1.6rem;
      }
    }
    &__listItemDescriptionText {
      line-height: 1.8;
    }
  }
</style>
