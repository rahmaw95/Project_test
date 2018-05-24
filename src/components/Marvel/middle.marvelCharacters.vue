<template>
  <div class="page">
    <characters-list></characters-list>
    <div class="loading" v-show="isLoading">
      <img v-bind:src="imageLink">
    </div>
  </div>
</template>

<script>
import CharactersList from '../Characters/CharactersList'

export default {
  data: {
      imageLink: require('../../assets/images/loading.gif')
  },
  components: {
    CharactersList,
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
