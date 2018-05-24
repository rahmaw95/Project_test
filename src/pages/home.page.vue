<template>
  <div>
    <navbar-home></navbar-home>
    <background-home></background-home>
    <about-home></about-home>
    <footer-home></footer-home>
  </div>
</template>

<script>
import navBarComponent from '../components/Common/navBar.common'
import backgroundHome from '../components/Home/background.home'
import aboutHome from '../components/Home/about.home'
import footerCommon from '../components/Common/footer.common'

export default {
  components: {
    'navbar-home': navBarComponent,
    'background-home': backgroundHome,
    'about-home': aboutHome,
    'footer-home': footerCommon
  }
}
</script>

<style>

</style>
