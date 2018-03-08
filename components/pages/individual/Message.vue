<template>
    <section class="p-messege__bg">
    <div class="p-messege__inner">
        <div class="p-messege__contents">
            <h3 class="p-messege__headingTitle">message</h3>
            <p class="p-messege__headingDescription">
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
            <p class="p-messege__headingDescription">
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
        </div>
    </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
    @import "~assets/scss/object/component/_container.scss";

.p-messege {
    margin-bottom: 40px;
    @include desktop {
    }
    &__bg{
        background-image: url(http://placehold.it/350x350);
        text-align: right;
        margin-bottom: 85px ;
    }
    &__inner {
        @include c-container;
    }
    &__contents{
        width: 40%;
        margin-left: auto;
    }
    &__headingTitle {
        padding: 30px 0;
        font-size: 5rem;
        font-family: Yu Mincho Medium,YuMincho,serif;
        font-weight: 400;
        color: #4d4b4d;
        text-align: center;
        background-size: cover;
    }
    &__headingDescription{
        color: #FFF;
        padding-bottom: 50px;
    }
}

</style>
