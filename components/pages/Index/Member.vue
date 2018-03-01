<template>
  <section class="p-member">
    <div class="p-member__heading">
      <div class="p-member__inner">
        <h3 class="p-member__headingTitle">Member</h3>
      </div>
    </div>
    <div class="p-member__inner">
      <div class="p-member__lists">
        <page-member v-for="(item, index) in listItems" :item="item" :index="index" :key="index"></page-member>
      </div>
    </div>
  </section>
</template>

<script>
import PageMember from "./_Member.vue";
export default {
  props: {
    listItems: Array
  },
  data() {
    return {};
  },
  components: {
    PageMember
  },
  async mounted() {}
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";
.p-member {
  background: #faf7f7;
  margin-bottom: 168px;
  @include desktop {
    margin-bottom: 150px;
  }
  &__inner {
    @include c-container;
  }
  &__heading {
    background: linear-gradient(#fff 50%, #faf7f7 50%);
  }
  &__headingTitle {
    @include c-titleCenter;
  }
  &__lists {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
