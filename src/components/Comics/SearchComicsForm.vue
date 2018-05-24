<template>
  <div class="search-character__form position">
    <form @submit.prevent="handleSearch()">
      <div class="jumbotron">
        <h2></span>Comic Marvel</h2>
        <div class="ui action input">
          <div class="sourcefilter">
            <select v-on:change="filterChanged" class="ui dropdown selects" v-model="comics">
              <option selected disabled> -- choose -- </option>
              <option v-for="comic in comics" v-bind:value="comic.id">{{comic.format}}</option>
              yess alright sebelahnya
            </select>
          </div>
          <input v-model="title"
            placeholder="Comics Name"
            type="text"
            required style="width:100%" />
          <button class="ui icon red button">
            <i class="search icon"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      title: '',
      filter:'',
      comics: '',
      // format: 'choose',
      options: []
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
    handleSearch () {
      this.$store.dispatch('FETCH_COMICS', this.title)
      this.$store.dispatch('FETCH_COMICS', this.format)
    },

  },
  created: function () {

    var self = this
    // this.callApiGet('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=07ce49deb4db58c5c0b0b32a65a9f157&hash=9712925550c951d0c12ed920db8bf9dc', function (responseData) {
    //   self.comics = []
    //   for (var index in responseData.data) {
    //     self.comics.push({value: responseData.data[index].format, label: responseData.data[index].format})
    //   }
    // }, {}, {}, false, false, false)
      // .then(response => {
      //   this.comics = response.data.data.results;
      // });
    // return this.$store.dispatch('FETCH_COMICS', this.format)
    this.$http.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=07ce49deb4db58c5c0b0b32a65a9f157&hash=9712925550c951d0c12ed920db8bf9dc')
      .then(response => {
        self.comics = response.data.data.results;
      });
  }
}
</script>

<style>
  .position{
    padding: 50px auto;
    text-align: center;
  }
  .selects{
    height: 55px !important;
    margin-right:20px
  }
</style>
