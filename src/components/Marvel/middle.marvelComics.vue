<template>
  <div class="page">
    <comics-list></comics-list>
    <div class="loading" v-show="isLoading">
      <img v-bind:src="imageLink">
    </div>
  </div>
</template>

<script>
import ComicsList from '../Comics/ComicsList'

export default {
  data: {
      imageLink: require('../../assets/images/loading.gif')
  },
  components: {
    ComicsList,
  },
  computed:{
    isLoading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>

<style>
  .loading{
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
</style>
