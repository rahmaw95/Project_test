<template>
  <div>
    <header-marvel></header-marvel>
    <middle-marvel></middle-marvel>
    <footer-marvel></footer-marvel>
  </div>
</template>

<script>
import headerMarvel from '../components/Common/header.common'
import middleMarvel from '../components/Marvel/middle.marvelComics'
import footerMarvel from '../components/Common/footer.common'

export default {
  components: {
    'header-marvel': headerMarvel,
    'middle-marvel': middleMarvel,
    'footer-marvel': footerMarvel
  }
}
</script>

<style>

</style>
