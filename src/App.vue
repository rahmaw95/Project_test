<template>
  <div id="app">
    <navbar></navbar>
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/Common/navBar.common'

export default {
  name: 'App',
  components: {
    'navbar': NavBar
  }
}
</script>

<style>

</style>
