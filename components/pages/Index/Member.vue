<template>
  <div>
    <section class="p-member">
      <h2 class="p-member--title">Member</h2>
      <div class="p-member---inner">
        <div class="p-member--list">
          <page-member class="p-member--item" v-for="member in members" :item="member" :key="member.index"></page-member>
        </div>
      </div>
    </section>
  </div>
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
  /*@import "~assets/scss/object/component/_button.scss";*/
  .p-member{
    @include c-container();
    /*background: #FAF7F7;*/
    margin-bottom: 6%;
    &--title{
      @include c-title;
      /*background: linear-gradient(#FFF 50%,#FAF7F7 50%);*/

    }
    &--sentence{
      @include c-sentence;
    }
    &--list{
      display: flex;
      flex-wrap: wrap;
    }
    &--item{
      align-items: center;
      width: 33%;
      padding: .5rem;
    }
  }

  @media screen and (min-width: 768px) {
    .p-member{
      &--list{
      display: flex;
      justify-content:space-between;
      background: #faf7f7;
    }
      &--item{
        align-items: center;
        width: 25%;
      }
    }
  }
</style>
