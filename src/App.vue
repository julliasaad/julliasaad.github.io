<template>
  <div id="app">
    <Header/>
    <About/>
    <MyWork/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from './sections/Header'
import About from './sections/About'
import MyWork from './sections/MyWork'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    Header, 
    About,
    MyWork,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/sass/main.scss';
#app {
  font-family: $font-default;
}
</style>
