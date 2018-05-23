<template>
  <div>
    <navbar-home></navbar-home>
    <background-home></background-home>
    <about-home></about-home>
    <gibox-case-home></gibox-case-home>
    <download-brochure-home></download-brochure-home>
    <our-services-home></our-services-home>
    <apply-opportunities-home></apply-opportunities-home>
    <footer-home></footer-home>
  </div>
</template>

<script>
import navBarComponent from '../components/Common/navBar.common'
import backgroundHome from '../components/Home/background.home'
import aboutHome from '../components/Home/about.home'
import giboxCaseHome from '../components/home/giboxCase.home'
import downloadBrochureHome from '../components/Home/downloadBrochure.home'
import ourServicesHome from '../components/Home/ourServices.home'
import applyOpportunitiesHome from '../components/Home/applyOpportunities.home'
import footerCommon from '../components/Common/footer.common'

export default {
  components: {
    'navbar-home': navBarComponent,
    'background-home': backgroundHome,
    'about-home': aboutHome,
    'gibox-case-home': giboxCaseHome,
    'download-brochure-home': downloadBrochureHome,
    'our-services-home': ourServicesHome,
    'apply-opportunities-home': applyOpportunitiesHome,
    'footer-home': footerCommon
  }
}
</script>

<style>

</style>
