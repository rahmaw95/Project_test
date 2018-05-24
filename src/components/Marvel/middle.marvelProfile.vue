<template>
  <div class="page">
    <!-- <filter-form></filter-form> -->
    <!-- <search-comics-form></search-comics-form> -->
    <comics-list></comics-list>
    <div class="loading" v-show="isLoading">
      <img src="/FireJak/images/loading.gif">
    </div>
  </div>
</template>

<script>
// import SearchComicsForm from '../Comics/SearchComicsForm'
import ComicsList from '../Comics/ComicsList'
// import filterForm from '../character/filterForm'

export default {
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
  }
</style>
