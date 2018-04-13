<template>
  <footer class="footer">
    <div class="footer__content">
        Send me an email: <span>julliasaad01@gmail.com</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
.footer {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;  
  background: $main-color;
  color: $base-light;
  &__content {
    font-weight: 600;
    font-size: 30px;
    span {
      font-weight: 400;
    }
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
}
</style>
