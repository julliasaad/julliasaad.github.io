<template>
  <section class="about">
    <h2>:)</h2>
    <div class="about__description">
      Hi! I'm Jullia Saad. I'm a front-end developer, a passionate about User Experience & one of the organizers of Rails Girls Sorocaba.
      I like building user-friendly interfaces. I like to share knowledge and I believe that with technology we can make a better world.
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__description {
    width: 65%;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    font-weight: 300;
    @media (min-width: 992px) {
      width: 45%;
      font-size: 18px;
      line-height: 30px;
    }
  }

}
</style>
