<template>
    <div class="p-member__listItem">
      <div class="p-member__listItemThumb"></div>
      <div class="p-member__listItemPosition">{{item.position}}</div>
      <p class="p-member__listItemName">{{item.name}}</p>
      <div class="p-member__listItemNameEn">{{item.nameEn}}</div>
    </div>
</template>

<script>
  export default {
    props: ['item', 'index'],
    data () {
      return {}
    },
    computed: {
    },
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  /*@import "~assets/scss/object/component/_button.scss";*/

  .p-member{
    &__listItem{
      padding-left: 2%;
      padding-right: 2%;
      box-sizing: border-box;
      width: 48%;
      text-align: center;
      @include desktop() {
        width: 25%;
      }
    }
    &__listItemThumb{
      margin-bottom: 10px;
      width: 100%;
      background-image: url("/images/member_goto.jpg");
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
      margin-bottom: 4px;
      letter-spacing: 2px;
      color: #393739;
      font-size: 2rem;
    }
    &__listItemNameEn{
      margin: 0 auto 30%;
      padding-bottom: 10%;
      color: #CCC4CB;
      font-family: "Yu Mincho Medium", YuMincho, serif;
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      position: relative;
      &::after {
        content: "";
        width: 60%;
        border-bottom: 2px solid #C3504F;
        position: absolute;
        left: 20%;
        bottom: 0;
      }
    }
  }

</style>
