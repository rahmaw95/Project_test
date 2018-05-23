<template>
  <div class="characterList">
    <div v-for="character in characters">
      <!-- <img v-bind:src="character.image"/> -->
      <p>{{character.title}}</p>
    </div>
  </div>

</template>

<script>

export default {
  name: 'characterList',
  props: ['result'],
  data(){
    return{
      characters: []
    }
  },
  methods: {
    updateResult: function (result){
      this.$http.get('https://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith=${name}&apikey=07ce49deb4db58c5c0b0b32a65a9f157&hash=9712925550c951d0c12ed920db8bf9dc')
        .then(response => {
          this.characters = response.data.data.results;
        });
    }
  },
  created: function(){
    this.updateResult(this.result);

  },
  watch: {
    result: function (val){
      this.updateResult(val);
    }
  }
}
</script>

<style>

</style>
