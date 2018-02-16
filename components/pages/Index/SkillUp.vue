<template>
  <section class="p-skillUp">
    <div class="p-skillUp__inner">
      <div class="p-skillUp__heading">
        <h3 class="p-skillUp__headingTitle">スキルアップ施策</h3>
        <p class="p-skillUp__headingIntro">Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ</p>
      </div>
      <ul class="p-skillUp__Lists">
        <li class="p-skillUp__ListItem">
          <div class="p-skillUp__ListItemTumb"></div>
          <div class="p-skillUp__ListItemDetail">
            <h4 class="p-skillUp__ListItemDetailHeading">多様なコミュニケーション</h4>
            <p class="p-skillUp__ListItemDetailDescription">
              slackやGitHubなどのITツールに・・・この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。<br>
              <br>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。<br>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。<br>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import PagePanel from "./_Panel.vue"
  export default {
    props: {
      skills: Array
    },
    data () {
      return {}
    },
    components: {
      PagePanel
    },
    async mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  .p-skillUp{
    &__inner {
      @include c-container;
    }
    &__heading {

    }
    &__headingTitle {
      @include c-titleCenter;
    }
    &__headingIntro {

    }
    &__Lists {
      display: flex;
      background: #faf7f7;
      border-right: 2px solid black;
    }
    &__ListItemTumb {
      display: inline-block;
      width: 40%;
      height: 100%;
      background-image: url("/images/skill_talk.jpg");
      background-position: center;
      background-size: cover;
    }
    &__ListItemDetail {
      display: inline-block;
      width: 60%;
      padding: 40px;
      box-sizing: border-box;
      vertical-align: top;

    }
    &__ListItemDetailHeading {

    }
    &__ListItemDetailDescription {

    }

  }

</style>
