<template>
  <div class="p-footerArea">
    <div class="p-footer">
      <div class="p-footer--inner">
        <nav class="p-navi">
          <a class="p-navi--link" href="/">chatboxについて</a>
          <a class="p-navi--link" href="/">サービス</a>
          <a class="p-navi--link" href="/">メンバー</a>
          <a class="p-navi--link" href="/contact">お問い合わせ</a>
        </nav>

        <div class="p-footer--body">
          <div>
            <div class="p-footer--icon">d</div>
          </div>
          <div class="p-footer--copyright">Copyright © chatbox.inc All Rights Reserved.</div>
          <div>
            <div class="p-footer--icon">d</div>
            <div class="p-footer--icon">d</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/layout/_layout.scss";
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  @import "~assets/scss/object/component/_button.scss";

  .p-footerArea{
    border-top: 2px solid #C3504F;
    background-color: #FAF7F7;
  }

  .p-footer{
    @include c-container;
    color: #B43B3E;
    &--body{
      display: flex;
      font-size: 1rem;
      align-items: center;
      padding: 1rem 0;
      justify-content: space-between;
    }
    &--icon{
      display: inline-block;
      width: 1.4rem;
      font-size: 1.4rem;
    }
  }
  .p-navi{
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(195,80,79,0.5);
    display: flex;
    justify-content: space-between;
    @include desktop{
      justify-content: flex-start;
    }
    &--link{
      text-decoration: none;
      padding: 1rem 0;
      color: inherit;
      @include desktop{
        padding-top: 3rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
      }
    }
  }
</style>
