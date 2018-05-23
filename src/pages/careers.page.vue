<template>
  <div>
    <header-careers></header-careers>
    <middle-careers></middle-careers>
    <footer-careers></footer-careers>
  </div>
</template>

<script>
import headerCareers from '../components/Common/header.common'
import middleCareers from '../components/Careers/middle.careers'
import footerCareers from '../components/Common/footer.common'

export default {
  components: {
    'header-careers': headerCareers,
    'middle-careers': middleCareers,
    'footer-careers': footerCareers
  }
}
</script>

<style>

</style>
