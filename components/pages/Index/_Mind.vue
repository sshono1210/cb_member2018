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
    margin-bottom: 60px;
    width: 100%;
    background: #faf7f7;
    text-decoration: none;
    color: #393739;
    position: relative;
    z-index: 100;
    @include desktop {
      margin-bottom: 0;
      width: 31%;
      z-index: 0;
    }
    &::before {
      display: inline-block;
      border-radius: 100%;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 3.5;
      font-size: 1.4rem;
      color: #fff;
      background: #c3504f;
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-40px);
      z-index: -10;
      @include desktop {
        border: none;
        width: 100px;
        height: 100px;
        line-height: 4;
        font-size: 1.6rem;
        top: -50px;
        left: 50%;
        transform: translateX(-50px);
        z-index: -10;
      }
    }
  }
  &__listItem.num01::before {
    content: "Point1";
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
      padding-top: 65%;
    }
  }
  &__listItemDescription {
    padding: 2rem 1.7rem 2rem 1.7rem;
    @include desktop {
      padding: 1.5rem;
    }
  }
  &__listItemDescriptionTitle {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    @include desktop {
      font-size: 1.6rem;
    }
  }
  &__listItemDescriptionText {
    line-height: 2.5;
    text-align: center;
  }
}
</style>
