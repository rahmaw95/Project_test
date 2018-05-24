<template>
  <div>
    <header-characters></header-characters>
    <middle-characters></middle-characters>
    <footer-characters></footer-characters>
  </div>
</template>

<script>
import headerCharacters from '../components/Common/header.common'
import charactersList from '../components/Marvel/middle.marvelCharacters'
import footerCharacters from '../components/Common/footer.common'

export default {
  components: {
    'header-characters': headerCharacters,
    'middle-characters': charactersList,
    'footer-characters': footerCharacters
  }
}
</script>

<style>

</style>
