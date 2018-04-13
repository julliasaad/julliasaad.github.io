<template>
  <section class="my-work">
    <h2 class="my-work__title">What I do</h2>
    <ul class="my-work__items">
      <li class="my-work__item">
        <h3 class="my-work__item__title">UX</h3>
        <p class="my-work__item__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum efficitur velit, et efficitur neque sollicitudin in. Pellentesque iaculis est non nunc vestibulum, in rhoncus justo rhoncus. Suspendisse in placerat lectus. Fusce id felis sit amet erat egestas semper id at eros. Curabitur vitae erat mattis, feugiat leo imperdiet, dapibus est. Sed sed neque ut nisi bibendum mattis ac at arcu. In rutrum, libero sed porttitor bibendum, nisl ipsum vehicula risus, nec porta ipsum metus id ligula. 
        </p>
      </li>
      <li class="my-work__item">
        <h3 class="my-work__item__title">UI</h3>
        <p class="my-work__item__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum efficitur velit, et efficitur neque sollicitudin in. Pellentesque iaculis est non nunc vestibulum, in rhoncus justo rhoncus. Suspendisse in placerat lectus. Fusce id felis sit amet erat egestas semper id at eros. Curabitur vitae erat mattis, feugiat leo imperdiet, dapibus est. Sed sed neque ut nisi bibendum mattis ac at arcu. In rutrum, libero sed porttitor bibendum, nisl ipsum vehicula risus, nec porta ipsum metus id ligula. 
        </p>
      </li>
      <li class="my-work__item">
        <h3 class="my-work__item__title">Code</h3>
        <p class="my-work__item__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum efficitur velit, et efficitur neque sollicitudin in. Pellentesque iaculis est non nunc vestibulum, in rhoncus justo rhoncus. Suspendisse in placerat lectus. Fusce id felis sit amet erat egestas semper id at eros. Curabitur vitae erat mattis, feugiat leo imperdiet, dapibus est. Sed sed neque ut nisi bibendum mattis ac at arcu. In rutrum, libero sed porttitor bibendum, nisl ipsum vehicula risus, nec porta ipsum metus id ligula. 
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
    align-items: center;  
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
