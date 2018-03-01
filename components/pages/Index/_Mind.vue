<template>
  <li :class="'p-mind__listItem num0' + index">
    <div class="p-mind__listItemThumb" :style="thumbStyle"></div>
    <div class="p-mind__listItemDescription">
      <div class="p-mind__listItemDescriptionTitle">{{item.title}}</div>
      <p class="p-mind__listItemDescriptionText">{{item.text1}}</p>
      <p class="p-mind__listItemDescriptionText">{{item.text2}}</p>
      <p class="p-mind__listItemDescriptionText">{{item.text3}}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["index", "item"],
  computed: {
    thumbStyle() {
      return { backgroundImage: `url('${this.item.thumbnail}')` };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-mind {
  &__listItem {
    display: block;
    border-top: 3px solid #c3504f;
    margin-bottom: 40px;
    width: 48%;
    background: #faf7f7;
    text-decoration: none;
    color: #393739;
    position: relative;
    z-index: 100;
    @include desktop {
      margin-bottom: 0;
      width: 28%;
      max-width: 28%;
      z-index: 0;
    }
    &::before {
      display: inline-block;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 100%;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 2.5;
      font-size: 1.4rem;
      color: #fff;
      background: #c3504f;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-25px);
      z-index: -10;
      @include desktop {
        border: none;
        width: 110px;
        height: 110px;
        line-height: 3;
        font-size: 2rem;
        top: -55px;
        left: 50%;
        transform: translateX(-55px);
        z-index: -10;
      }
    }
  }
  &__listItem.num01 {
    @include desktop() {
      margin-right: 30px;
    }
  }
  &__listItem.num01::before {
    content: "Point1";
  }
  &__listItem.num02 {
    top: 7rem;
    @include desktop() {
      top: 0;
      margin-right: 30px;
    }
  }
  &__listItem.num02::before {
    content: "Point2";
  }
  &__listItem.num03::before {
    content: "Point3";
  }
  &__listItem.num04::before {
    content: "Point4";
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
    background: #fff;
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
    padding: 2rem 1.7rem 2rem 1.7rem;
    @include desktop {
      padding: 2rem 2rem 4rem 2rem;
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
    @include desktop {
      line-height: 3;
    }
  }
}
</style>
