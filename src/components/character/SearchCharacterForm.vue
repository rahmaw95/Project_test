<template>
  <!-- <div class="resultselection">
    <div>
      <div class="jumbotron">
        <h4>Select Format Type</h4>
        <select class="form-control" v-on:change="resultChanged">
          <option value="">Please select news result ...</option>
          <option v-for="result in results" v-bind:value="result.id">{{result.title}}</option>
        </select>

      </div>
    </div>
  </div> -->
  <div class="container" id="app">
    <h3 class="text-center">VueNews</h3>

    <section class="callout secondary">
      <h5 class="text-center">Filter by Category</h5>
      <form>
        <div class="row">
          <div class="large-6 columns">
            <select v-model="section">
  							<option v-for="section in sections" :value="section">{{ section }}</option>
  						</select>
          </div>
          <div class="large-6 columns">
            <a @click="getPosts(section)" class="button expanded">Retrieve</a>
          </div>
        </div>
      </form>
    </section>

    <h5 class="text-center uppercase" v-if="!loading">{{ title }}</b></h5>
    <div v-if="loading" class="loader"><img src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loader"></div>

    <news-list v-if="!loading" :results="results"></news-list>
  </div>
</template>
<script>
export default {
  name: 'resultselection',
  data () {
    return {
      results: [],
      result: ''
    }
  },
  methods: {
    resultChanged: function(e) {
     for (var i=0; i<this.results.length; i++) {
       if (this.results[i].id == e.target.value) {
         this.result = this.results[i];
       }
     }
     this.$emit('resultChanged', e.target.value);
    }
  },
  created: function () {
    // return this.$store.dispatch('FETCH_COMICS', this.format)
    this.$http.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=07ce49deb4db58c5c0b0b32a65a9f157&hash=9712925550c951d0c12ed920db8bf9dc')
      .then(response => {
        this.results = response.data.data.results;
      });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
