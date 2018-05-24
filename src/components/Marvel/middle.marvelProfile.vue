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
// import filterForm from '../character/filterForm'

export default {
  data: {
      imageLink: require('../../assets/images/loading.gif')
  },
  components: {
    // SearchComicsForm,
    ComicsList,
    // filterForm,
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
