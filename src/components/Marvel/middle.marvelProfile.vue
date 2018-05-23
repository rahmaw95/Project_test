<template>
  <div class="page">
    <!-- <filter-form></filter-form> -->
    <search-comics-form></search-comics-form>
    <comics-list v-bind:result="result"></comics-list>
  </div>
</template>

<script>
import SearchComicsForm from '../Comics/SearchComicsForm'
import ComicsList from '../Comics/ComicsList'
// import filterForm from '../character/filterForm'

export default {
  components: {
    SearchComicsForm,
    ComicsList,
    // filterForm,
  },
  data(){
    return{
      result: 'Comics Name'
    }
  },
  methods: {
    filterChanged: function (result){
      this.result = result;
    }
  }
}
</script>
