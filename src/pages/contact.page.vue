<template>
  <div>
    <header-contact></header-contact>
    <middle-contact></middle-contact>
    <footer-contact></footer-contact>
  </div>
</template>

<script>
import headerContact from '../components/Common/header.common'
import middleContact from '../components/ContactUs/middle.contactUs'
import footerContact from '../components/Common/footer.common'

export default {
  components: {
    'header-contact': headerContact,
    'middle-contact': middleContact,
    'footer-contact': footerContact
  }
}
</script>

<style>

</style>
