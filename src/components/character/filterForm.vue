<template>
  <div class="sourcefilter">
    <select v-on:change="filterChanged" class="ui dropdown selects">
      <option selected disabled> -- choose -- </option>
      <option v-for="comic in comics" v-bind:value="comic.id">{{comic.format}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'sourcefilter',
  data () {
    return {
      comics: [],
      comic: '',
      format:{}
    }
  },
  methods: {
    filterChanged: (e) => {
      for(var i=0; i<this.comics.length; i++){
        if(this.comics[i].id == e.target.value){
          this.comic = this.comics[i];
        }
      }
      this.$emit('filterChanged', e.target.value);
    },
  },
  created: function () {
    // return this.$store.dispatch('FETCH_COMICS', this.format)
    this.$http.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=07ce49deb4db58c5c0b0b32a65a9f157&hash=9712925550c951d0c12ed920db8bf9dc')
      .then(response => {
        this.comics = response.data.data.results;
      });
  }
}
</script>
<style>
  .selected{
    height: 55px;
  }
</style>
