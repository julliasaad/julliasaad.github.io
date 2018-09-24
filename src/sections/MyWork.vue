<template>
  <section class="my-work">
    <h2 class="my-work__title">What I do</h2>
    <h3>Studying differents forms to create a digital interfaces based on user feedbacks and requirements. In order to create the best possible experience with a digital product.</h3>
    <ul class="my-work__items">

      <li class="my-work__item">
        <h3 class="my-work__item__title">UX</h3>
        <p class="my-work__item__description">
          Creating prototypes, wireframes, storyboards, user flows, and site maps to effectively communicate interaction and design ideas.
        </p>
      </li>
      <li class="my-work__item">
        <h3 class="my-work__item__title">UI</h3>
        <p class="my-work__item__description">
          Defining and implementing innovative solutions for the product direction, visuals and experience.
        </p>
      </li>
      <li class="my-work__item">
        <h3 class="my-work__item__title">Code</h3>
        <p class="my-work__item__description">
          Using HTML, CSS, and JavaScript to build everything a user sees and interacts with on a website.
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MyWork',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
.my-work {
  text-align: center;
  min-height: 100vh;
  padding: 2em;
  border-top: 1px solid lighten($main-color, 40%);
  &__title {
    font-size: 65px;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: 600;
  }
  &__items {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  &__item {
    width: 90%;
    font-weight: 300;
    font-size: 30px;
    text-align: left;
    &__title {
      text-transform: uppercase;
    }
    &__description {
      text-align: left;
      @media (min-width: 992px) {
        text-align: left;
      }
    }
    @media (min-width: 992px) {
      font-size: 16px;
      width: 350px;
      text-align: center;
    }
  }
}
</style>
