<template>
  <section class="contact">
    <h2 class="contact__title">Let's build something together!</h2>
    <ul class="contact__items">
      <li class="contact__item">
        <a class="contact__item" href="https://github.com/julliasaad" target="_blank"><span class="fab fa-github"></span></a>
      </li>
      <li class="contact__item">
        <a class="contact__item" href="https://www.linkedin.com/in/jullia-saad/" target="_blank"><span class="fab fa-linkedin"></span></a>
      </li>
      <li class="contact__item">
        <a class="contact__item" href="mailto:julliasaad01@gmail.com"><span class="far fa-envelope"></span></a>
      </li>
    </ul>  
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
.contact {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  border-top: 1px solid lighten($main-color, 40%);
  &__title {
    font-size: 75px;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 .5em 1em .5em;
    @media (min-width: 992px) {
      padding: 0 0 1em 0;
      flex-direction: row;
      justify-content: space-around;
      font-size: 65px;
    }
  }
  &__items {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  &__item {
    width: 350px;
    margin-bottom: 1em;
    font-weight: 300;
    font-size: 80px;
    text-transform: uppercase;
    color: $main-color;
    @media (min-width: 992px) {
      margin-bottom: 0;
      font-size: 60px;
    }
  }
  
}
</style>
