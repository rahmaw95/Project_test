<template>
  <div>
    <!-- <middle-privacy-policy v-if="$route.params.menu === 'privacyPolicy'"></middle-privacy-policy>
    <middle-term-condition v-if="$route.params.menu === 'termCondition'"></middle-term-condition>
    <middle-about v-if="$route.params.menu === 'aboutUs'"></middle-about>
    <middle-careers v-if="$route.params.menu === 'careers'"></middle-careers>
    <middle-contact-us v-if="$route.params.menu === 'contactUs'"></middle-contact-us> -->
    <middle-marvel-comics v-if="$route.params.menu === 'marvelComics'"></middle-marvel-comics>
    <middle-marvel-characters v-if="$route.params.menu === 'marvelCharacters'"></middle-marvel-characters>
  </div>
</template>

<script>
// import middleAbout from '../About/middle.about'
// import middlePrivacyPolicy from '../PrivacyPolicy/middle.privacyPolicy'
// import middleTermCondition from '../TermCondition/middle.termCondition'
// import middleCareers from '../Careers/middle.careers'
// import middleContactUs from '../ContactUs/middle.contactUs'
import middleMarvelComics from '../Marvel/middle.marvelComics'
import middleMarvelCharacters from '../Marvel/middle.marvelCharacters'

export default {
  components: {
    // 'middle-privacy-policy': middlePrivacyPolicy,
    // 'middle-term-condition': middleTermCondition,
    // 'middle-about': middleAbout,
    // 'middle-careers': middleCareers,
    // 'middle-contact-us': middleContactUs,
    'middle-marvel-comics': middleMarvelComics,
    'middle-marvel-characters': middleMarvelCharacters
  }
}
</script>

<style>

</style>
