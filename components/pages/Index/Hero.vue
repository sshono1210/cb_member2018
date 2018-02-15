<template>
  <div>
    <div class="p-hero">
      <div class="p-hero__inner">
        <div class="p-hero__heading">
          <h2 class="p-hero__headingTitle">chatboxでの働き方</h2>
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
  @import "~assets/scss/object/component/_title.scss";

  .p-hero{
    background: url('/images/member_top.jpg') center no-repeat;
    background-size: cover;
    position: relative;
    &::before {
      content: "";
      display: block;
      padding-top: 50%;
      background: linear-gradient(90deg, rgba(195,80,79,0.49) 0%, rgba(182,80,78,0.29) 67.45%, rgba(123,5,3,0) 100%);
      @include desktop {
        padding-top: 45%;
      }
    }
    &::after {
      display: inline-block;
      content: "";
      width: 2px;
      height: 70px;
      background: #c3504f;
      position: absolute;
      left: 50%;
      top: 270px;
      transform: translateX(-1px);
      animation: border_sp .5s ease .5s alternate both running;
      @include desktop() {
        height: 140px;
        animation: border_pc .5s ease .5s alternate both running;
        top: 740px;
      }
      @keyframes border_sp {
        0% {
          height: 0;
        }
        100% {
          height: 70px;
        }
      }
      @keyframes border_pc {
        0% {
          height: 0;
        }
        100% {
          height: 140px;
        }
      }
    }
    &__inner {
      @include c-container;
    }
    &__heading {
      color: #FFF;
      position: absolute;
      bottom: 15%;
      @include desktop {

      }
    }
    &__headingTitle {
      display: inline-block;
      margin-bottom: 10px;
      font-size: 2.5rem;
      font-weight: bold;
      letter-spacing: 3px;
      line-height: 1.5;
      @include desktop {
        margin-bottom: 20px;
        font-size: 4.5rem;
        letter-spacing: 6px;
      }
    }
    &__headingIntro {
      font-size: 1.4rem;
      letter-spacing: 2px;
      @include desktop {
        font-size: 1.8rem;
      }

    }
  }
</style>
