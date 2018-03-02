<template>
    <div class="p-member__listItem">
      <div class="p-member__listItemThumb" :style="thumbStyle"></div>
      <div class="p-member__listItemPosition">{{item.position}}</div>
      <p class="p-member__listItemName">{{item.name}}</p>
      <div class="p-member__listItemNameEn">{{item.nameEn}}</div>
    </div>
</template>

<script>
export default {
  props: ["item", "index"],
  data() {
    return {};
  },
  computed: {
    thumbStyle() {
      return { backgroundImage: `url('${this.item.thumbnail}')` };
    }
  },
  async mounted() {}
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";
/*@import "~assets/scss/object/component/_button.scss";*/

.p-member {
  &__listItem {
    padding-left: 2%;
    padding-right: 2%;
    box-sizing: border-box;
    width: 48%;
    text-align: center;
    @include desktop() {
      width: 25%;
    }
  }
  &__listItemThumb {
    margin-bottom: 10px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }
  &__listItemPosition {
    margin-bottom: 8px;
    color: #393739;
    font-size: 1.2rem;
  }
  &__listItemName {
    letter-spacing: 2px;
    color: #393739;
    font-size: 2rem;
    line-height: 1.4;
  }
  &__listItemNameEn {
    margin: 0 auto 30%;
    padding-bottom: 10%;
    color: #ccc4cb;
    font-family: "Yu Mincho Medium", YuMincho, serif;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    position: relative;
    &::after {
      content: "";
      width: 60%;
      border-bottom: 2px solid #c3504f;
      position: absolute;
      left: 20%;
      bottom: 0;
    }
  }
}
</style>
