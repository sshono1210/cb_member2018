<template>
  <section class="p-member">
    <div class="p-member__heading">
      <div class="p-member__inner">
        <h3 class="p-member__headingTitle">Member</h3>
      </div>
    </div>
    <div class="p-member__inner">
      <div class="p-member__lists">
        <div class="p-member__listItem">
          <p>メンバーの紹介</p>
        </div>
        <div class="p-member__listItem">
          <p>メンバーの紹介</p>
        </div>
        <div class="p-member__listItem">
          <p>メンバーの紹介</p>
        </div>
        <div class="p-member__listItem">
          <p>メンバーの紹介</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import PageMember from "./_Member.vue"
  export default {
    props: {
      members: Array
    },
    data () {
      return {}
    },
    components: {
      PageMember
    },
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  .p-member{
    background: #FAF7F7;
    &__inner {
      @include c-container;
    }
    &__heading {
      background: linear-gradient(#fff 50%, #FAF7F7 50%);
    }
    &__headingTitle {
      @include c-titleCenter;
    }
    &__lists {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__listItem{
      width: 20%;
     background: red;
    }
  }
</style>
