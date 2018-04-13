<template>
  <header class="header">
    <h1 class="header__title">
      <div class="header__title__left">
        Jullia Saad
      </div>
      <div class="header__title__right">
        <span class="header__title__right--up">UX &</span>
        <span class="header__title__right--bottom">Code</span>
      </div>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
.header {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;  
  background: #7f7693; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #7f7693 0%, #756796 44%, #645394 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, #7f7693 0%,#756796 44%,#645394 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #7f7693 0%,#756796 44%,#645394 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7f7693', endColorstr='#645394',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  color: $base-light;
  &__title {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    &__left {
      display: inline-block;
      margin-right: .5em;
      border: 1px solid $base-light;
      padding: 22px;
      font-size: 70px;
    }
    &__right {
      display: inline-block;
      &--up {
        display: block;
        font-weight: 200;
        font-size: 70px;
      }
      &--bottom {
        font-size: 52px;
      }
    }
  }
}
</style>
