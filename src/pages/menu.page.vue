<template>
  <div>
    <header-menu></header-menu>
    <middle-menu></middle-menu>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import headerMenu from '../components/Common/header.common'
import middleMenu from '../components/Common/middle.common'
import footerMenu from '../components/Common/footer.common'

export default {
  components: {
    'header-menu': headerMenu,
    'middle-menu': middleMenu,
    'footer-menu': footerMenu
  }
}
</script>

<style>

</style>
