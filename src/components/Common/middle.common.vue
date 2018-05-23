<template>
  <div>
    <middle-privacy-policy v-if="$route.params.menu === 'privacyPolicy'"></middle-privacy-policy>
    <middle-term-condition v-if="$route.params.menu === 'termCondition'"></middle-term-condition>
    <middle-about v-if="$route.params.menu === 'aboutUs'"></middle-about>
    <middle-careers v-if="$route.params.menu === 'careers'"></middle-careers>
    <middle-contact-us v-if="$route.params.menu === 'contactUs'"></middle-contact-us>
    <middle-marvel-profile v-if="$route.params.menu === 'marvelProfile'"></middle-marvel-profile>
  </div>
</template>

<script>
import middleAbout from '../About/middle.about'
import middlePrivacyPolicy from '../PrivacyPolicy/middle.privacyPolicy'
import middleTermCondition from '../TermCondition/middle.termCondition'
import middleCareers from '../Careers/middle.careers'
import middleContactUs from '../ContactUs/middle.contactUs'
import middleMarvelProfile from '../Marvel/middle.marvelProfile'

export default {
  components: {
    'middle-privacy-policy': middlePrivacyPolicy,
    'middle-term-condition': middleTermCondition,
    'middle-about': middleAbout,
    'middle-careers': middleCareers,
    'middle-contact-us': middleContactUs,
    'middle-marvel-profile': middleMarvelProfile
  }
}
</script>

<style>

</style>
