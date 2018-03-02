<template>
  <li :class="oddClass" >
    <div class="p-skillUp__ListItemTumb" :style="thumbStyle"></div>
    <div class="p-skillUp__ListItemDetail">
      <h4 class="p-skillUp__ListItemDetailHeading">{{skill.title}}</h4>
      <p class="p-skillUp__ListItemDetailDescription">{{skill.text}}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["skill", "index"],
  computed: {
    oddClass() {
      return {
        "p-skillUp__ListItem": true,
        "is-odd": this.index % 2 !== 0
      };
    },
    thumbStyle() {
      return {
        backgroundImage: `url('${this.skill.thumbnail}')`
      };
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-skillUp {
  &__ListItem {
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    background: #faf7f7;
    border-right: 2px solid #c3504f;
    @include desktop {
      flex-wrap: nowrap;
    }

  }
  &__ListItem.is-odd {
    border-right: none;
    border-left: 2px solid #c3504f;
    flex-direction: row-reverse;
  }
  &__ListItemTumb {
    display: block;
    width: 100%;
    height: 200px;
    background-image: url("/images/skill_talk.jpg");
    background-position: center;
    background-size: cover;
    @include desktop {
      display: inline-block;
      width: 45%;
      height: auto;
    }
  }
  &__ListItemDetail {
    display: block;
    width: 100%;
    padding: 30px 40px;
    box-sizing: border-box;
    vertical-align: top;
    @include desktop {
      display: inline-block;
      width: 60%;
    }
  }
  &__ListItemDetailHeading {
    font-weight: bold;
    margin-bottom: 1em;
    font-size: 1.9rem;
  }
  &__ListItemDetailDescription {
  }
}
</style>
